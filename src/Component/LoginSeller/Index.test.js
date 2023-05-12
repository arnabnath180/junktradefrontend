import Index from './Index'
import {render, screen} from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';


describe("Test Index",()=>{
    test("render with 1 buttons",async()=>{
        render(<Router><Index/></Router>)
        const btnList=await screen.findAllByRole("button");
        expect(btnList).toHaveLength(1);
    })

    test("check password type",()=>{
        render(<Router><Index/></Router>)
        const password=screen.getByPlaceholderText("Password");
        expect(password).toHaveAttribute("type","password");
    })

    test("check email type",()=>{
        render(<Router><Index/></Router>)
        const email=screen.getByPlaceholderText("Enter email");
        expect(email).toHaveAttribute("type","email");
    })
})