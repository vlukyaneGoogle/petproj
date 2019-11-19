import {RepoFactory} from '../../todos/repo/RepoFactory';
import {DBTypes, getDb} from '../../index';
import {TodoService} from '../../todos/services/TodoService';

const expect = require('chai').expect;
const faker = require('faker');
const sinon = require('sinon');

export {};

describe('Repo Factory: ', () => {
    let mongoDB;
    let postgresDB;
    let mongoRepo;
    let allTodos;
    let newTodo;
    let stubbedTodo;
    let addedTestTodos;
    let todoService;

    describe('Preparing db and repo', () => {
        it('Should return new mongo db', done => {
            mongoDB = getDb(DBTypes.MONGO);
            expect(mongoDB.type).to.include('mongo');
            done();
        });

        it('Should return new postgres db', done => {
            postgresDB = getDb(DBTypes.POSTGRE);
            expect(postgresDB.type).to.include('postgres');
            done();
        });

        it('Should return new mongo Repo', done => {
            mongoRepo = RepoFactory.create(mongoDB);
            expect(mongoRepo.name).to.include('mongo');
            done();
        });

        it('Should return new todoService', done => {
            todoService = new TodoService(mongoRepo);
            expect(todoService).to.have.property('repo');
            done();
        });
    });

    describe('Testing repo methods', () => {

        before(async () => {
            const testTodos = [
                {
                    content: 'try to todo',
                    isCompleted: false,
                    isEditing: false
                },
                {
                    content: 'try to todo second',
                    isCompleted: false,
                    isEditing: false
                },
                {
                    content: 'try to todo third',
                    isCompleted: false,
                    isEditing: false
                },
                {
                    content: 'try to todo use force',
                    isCompleted: false,
                    isEditing: false
                },
                {
                    content: 'try to todo tototo',
                    isCompleted: false,
                    isEditing: false
                },
            ];
            addedTestTodos = await Promise.all(testTodos.map( async(todo) => {
                return await mongoRepo.addNewTodo(todo);
            }));
        });

        after(async () => {
            await Promise.all(addedTestTodos.map( async(todo) => await mongoRepo.deleteTodoById(todo._id)));
        });

        it('Should return all todos', done => {
            mongoRepo.getAllTodos().then( result => {
                expect(result).to.be.an('array');
                allTodos = result;
                done();
            });
        });

        it('Should get todo by id', done => {
            const testId = addedTestTodos[0]._id;
            mongoRepo.getTodoById(testId).then( todo => {
                expect(todo).to.have.property('_id');
                expect(todo).to.have.property('content');
                expect(todo).to.have.property('isCompleted');
                expect(todo).to.have.property('isEditing');
                done();
            })
        });

        it('Should return error when wrong id for getTodoById', done => {
            try {
                const testId = '5da836550f65901ddedf6';
                mongoRepo.getTodoById(testId)
                    .then( err => {
                        expect(err.name).to.include('CastError');
                        done();
                    })
                    .catch((err) => done(err));
            }
            catch (error) {
                done(error)
            }
        });

        it('Should add new todo', done => {
            newTodo = {
                content: faker.random.words(),
                isEditing: false,
                isCompleted: false
            };
            mongoRepo.addNewTodo(newTodo)
                .then( todo => {
                    expect(todo).to.have.property('_id');
                    expect(todo).to.have.property('content');
                    expect(todo).to.have.property('isCompleted');
                    expect(todo).to.have.property('isEditing');
                    newTodo = todo;
                    mongoRepo.getAllTodos().then( result => {
                        expect(result).to.be.an('array');
                        expect(result.length - allTodos.length).to.be.equal(1);
                        done();
                    });
                });
        });

        it('Should update todo by id', done => {
            const updatedTodo = Object.assign(addedTestTodos[1]);
            updatedTodo.content = 'Some content';
            mongoRepo.updateTodoById(updatedTodo._id, updatedTodo)
                .then( result => {
                    expect(result.ok).to.be.equal(1);
                    done();
                });
        });

        it('Should delete todo by id', done => {
            mongoRepo.deleteTodoById(newTodo._id)
                .then( result => {
                    expect(result.ok).to.be.equal(1);
                    done();
                });
        });
    });

    describe('Testing service methods', () => {
        it('Should return stubbed data', done => {
           const serviceStub = sinon.stub(todoService.repo, 'getAllTodos');
           serviceStub.returns(Promise.resolve(addedTestTodos));
           todoService.getAllTodos()
               .then( todos => {
                   expect(todos).to.be.an('array');
                   const todo = todos[0];
                   expect(todo).to.have.property('_id');
                   expect(todo).to.have.property('content');
                   expect(todo).to.have.property('isCompleted');
                   expect(todo).to.have.property('isEditing');
                   done();
               })
               .catch( err => {
                   done(err);
               })
        });

        it('Should return todo by id', done => {

            stubbedTodo = {
                _id: '5da836532d50f65901ddedf6',
                content: 'try to todo third',
                isCompleted: false,
                isEditing: false
            };
           const serviceStub = sinon.stub(todoService.repo, 'getTodoById');
           serviceStub.returns(Promise.resolve(stubbedTodo));
           todoService.getTodoById(stubbedTodo._id)
               .then(todo => {
                   expect(todo).to.have.property('_id');
                   expect(todo).to.have.property('content');
                   expect(todo).to.have.property('isCompleted');
                   expect(todo).to.have.property('isEditing');
                   done();
               })
               .catch(err => {
                   done(err);
               })
        });

        it('Should add new todo and return it', done => {
           const reqBody = {
               content : 'new TODO'
           };
           const newTodo = Object.assign(stubbedTodo);
           newTodo.content = reqBody.content;

           const serviceStub = sinon.stub(todoService.repo, 'addNewTodo');
           serviceStub.returns(Promise.resolve(stubbedTodo));

           todoService.addNewTodo(reqBody)
               .then(todo => {
                   expect(todo).to.have.property('_id');
                   expect(todo).to.have.property('content');
                   expect(todo).to.have.property('isCompleted');
                   expect(todo).to.have.property('isEditing');
                   done();
               })
               .catch(err => {
                  done(err)
               });
        });

        it('Should delete todo and return status', done => {
           const serviceStub = sinon.stub(todoService.repo, 'deleteTodoById');
           serviceStub.returns(Promise.resolve({
               n: 1,
               ok: 1,
               deletedCount: 1
           }));

           todoService.deleteTodoById(stubbedTodo._id)
               .then(result => {
                   expect(result.ok).to.be.equal(1);
                   done();
               })
               .catch(err => {
                   console.log('OPA ERROR');
                   done(err);
               })
        });

        it('Should update todo and return status', done => {
            const serviceStub = sinon.stub(todoService.repo, 'updateTodoById');
            serviceStub.returns(Promise.resolve({
                n: 1,
                ok: 1,
                updatedCount: 1
            }));
                ///// need to stub somehow mongoose model!!
            const updatedContent = 'new string';
            todoService.updateTodoById(stubbedTodo._id, updatedContent)
                .then(result => {
                    console.log(result);
                    expect(result.ok).to.be.equal(1);
                    done();
                })
                .catch(err => {
                    done(err)
                })
        });
    });
});
