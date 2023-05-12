import Index from './Index'
import RenderedComponent1 from '../SellerDashboard/Index.js';
import RenderedComponent2 from '../SellerHistory/Index.js';
import {fireEvent, render, screen} from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';


describe("Test Index",()=>{
    test("render with 3 buttons",async()=>{
        render(<Router><Index/></Router>)
        const btnList=await screen.findAllByRole("button");
        expect(btnList).toHaveLength(3);
    })

    test("sell button click", async()=>{
        const { queryByTestId }=render(
            <Router>
                <Index/>
                <RenderedComponent1/>
            </Router>
        )
        const sell=screen.getByRole("button",{name:"Sell Scrap"})
        fireEvent.click(sell)
        expect(queryByTestId('seller-dashboard')).toBeInTheDocument();
    })

    test("history button click", ()=>{
        const { queryByTestId }=render(
            <Router>
                <Index/>
                <RenderedComponent2/>
            </Router>
        )
        const history=screen.getByRole("button",{name:"Scrap History"})
        fireEvent.click(history)
        expect(queryByTestId('scrap-history')).toBeInTheDocument();
    })  
})