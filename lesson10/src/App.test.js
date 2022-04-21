import { render,screen } from "@testing-library/react";
import App from "./App";


test('renders learn react link',()=>{
    render(<App/>);
    const paragraf=screen.getByText(/hello world/i);
    const btn=screen.getByRole('button');
    const input=screen.getByPlaceholderText(/input value/i);

    expect (paragraf).toBeInTheDocument();
    expect (btn).toBeInTheDocument();
    expect (input).toBeInTheDocument();

})
