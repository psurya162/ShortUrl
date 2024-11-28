import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,

    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator


} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut ,LinkIcon} from 'lucide-react'


const Header = () => {

    const navigate = useNavigate()
    const user = false;
    return (
        <nav className='py-2 flex justify-between items-center' >
            <Link to="/">
                <img src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" className="h-16 " />
            </Link>
            <div>
                {!user ? <Button onClick={() => navigate('/auth')} >Login</Button> : (
                    <DropdownMenu>
                        <DropdownMenuTrigger className="w-10 rounded-full overflow-hidden">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Alok Kumar</DropdownMenuLabel>
                            <DropdownMenuSeparator />

                            <DropdownMenuItem>
                                <LinkIcon/>
                                My Links </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-400 ">
                                <LogOut  className='mr-2 h-4 w-4'/>
                                <span>Logout</span></DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                )}

            </div>
        </nav>
    )
}

export default Header;