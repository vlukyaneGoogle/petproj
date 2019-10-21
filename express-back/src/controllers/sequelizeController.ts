// import { Todo } from "../models/sequelize-models/Todo";
//
// export default {
//     async getAllTodos(req, res) {
//         try {
//             const items = await Todo.findAll();
//             return res.status(200).send({ items });
//         } catch (error) {
//             return res.status(400).send(error);
//         }
//     },
//
//     async getById(req, res) {
//         const id = Number.parseInt(req.params.id, 10);
//         try {
//             const item = await Todo.findByPk(id);
//             return res.status(200).send({ item });
//         } catch (error) {
//             return res.status(400).send(error);
//         }
//     },
//
//     async createTodo(req, res) {
//         try {
//             console.log(req.body);
//
//             const item = await Todo.create(req.body);
//             return res.status(201).json({ item });
//         } catch (error) {
//             return res.status(400).send(error);
//         }
//     },
//
//     async updateTodo(req, res) {
//         const id = Number(req.params.id);
//
//         try {
//             const [numberOfAffectedRows, affectedRows] = await Todo.update(
//                 {
//                     title: req.body.title
//                 },
//                 {
//                     where: { id },
//                     returning: true, // needed for affectedRows to be populated
//                     plain: true // makes sure that the returned instances are just plain objects
//                 }
//             );
//             return res.status(200).send({ item: affectedRows });
//         } catch (error) {
//             return res.status(400).send(error);
//         }
//     },
//
//     async toggleCompleted(req, res) {
//         const id = Number(req.params.id);
//         try {
//             const item = await Todo.findByPk(id);
//             const updated = await item.update({
//                 completed: !item.completed
//             });
//
//             return res.status(201).send(updated);
//         } catch (error) {}
//     },
//
//     async deleteTodo(req, res) {
//         const id = Number.parseInt(req.params.id, 10);
//
//         try {
//             await Todo.destroy({
//                 where: { id }
//             });
//             return res.status(204).send({ message: "Item deleted" });
//         } catch (error) {
//             return res.status(400).send(error);
//         }
//     }
// };
