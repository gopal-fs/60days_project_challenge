import path from "path"
import { addDays } from "date-fns"


const name="Gopal"

const pathUrl=path.join(name,"user","txt")
console.log(pathUrl)

const add=addDays(new Date(),5)
console.log(add)

