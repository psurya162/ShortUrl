import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button'
import { Input } from '@/components/ui/input'

import { BeatLoader } from 'react-spinners';
import * as Yup from 'yup';
const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }
  const HandleLogin =async (e) => {
    e.preventDefault()
    try {

      const schema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required(),
        password: Yup.string()
        .min("6 char").required(),
      })

      await schema.validate(formData, {
        abortEarly: false
        })

    } catch (e) {
      console.log(e)
    }
  }
  return (

    <Card>
      <CardHeader>
        <CardTitle>Login </CardTitle>
        <CardDescription>To your </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">

          <Input name="email" type="eamil" placeholder="Enter Your Email" />
        </div>
        <div className="space-y-1">

          <Input name="password" type="password" placeholder="Enter Your password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={HandleLogin}>
          {true ? <BeatLoader size={10} color="#fff" /> : "Login"}
        </Button>
      </CardFooter>
    </Card>


  )
}

export default Login;