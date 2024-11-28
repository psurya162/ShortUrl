/* eslint-disable no-unused-vars */
import React from 'react'
import Login from '../components/Login'
import { useSearchParams } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
const Auth = () => {
  const [searchParams] = useSearchParams()
  return (
    <div className='mt-36 flex flex-col items-center gap-10'>
      <h1 className='text-3xl  font-extrabold'>
        {searchParams.get("createNew")
          ? "Hold Up! Lets Login First" : " Login/Singup "
        }


      </h1>
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Singup</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Login/>
        </TabsContent>
        <TabsContent value="signup">Singup Components</TabsContent>
      </Tabs>

    </div>
  )
}

export default Auth
