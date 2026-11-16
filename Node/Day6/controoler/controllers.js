
// const arr = []

// export const controllers = async (req, res) => {
//     try {
//         const {id, name, email, age } = req.body

//         arr.push({id, name, email, age })

//         res.status(201).json({
//             message: "Data added successfully",
//             data: arr
//         })

//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// }



// export const deleteData = async (req, res) => {
//     try {
//         const { email } = req.body

//         const index = arr.findIndex((e) => e.email === email)

//         if (index === -1) {
//             return res.status(404).json({
//                 message: "User not found"
//             })
//         }

//         arr.splice(index, 1)

//         res.status(200).json({
//             message: "User deleted successfully",
//             data: arr
//         })

//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// }
