import { fireEvent, render , screen } from "@testing-library/react";
import { test } from "vitest";
import NoteApp from "../NoteApp";
import { NotesProvider } from "../../context/NotesContext";


test("Note app #1 : should input be emty after submit" , ()=>{
    render(
   <NotesProvider>
     <NoteApp sortBy="latest" />
   </NotesProvider>
); 
    const inputTitle = screen.getByPlaceholderText(/Note title/i);
    const inputDescription = screen.getByPlaceholderText(/Note description/i);
    fireEvent.change(inputTitle , { target : { value : "Note on title" } });
    fireEvent.change(inputDescription , { target : { value : "Note one description" } });

    const button = screen.getByRole("button" , { name: /Add New Note/i } );
    fireEvent.click(button);

    expect(inputTitle.value).toBe("");

} );