import React from "react";
import { 
    Container,
    Headers,
    Title,

} from "./styles";

interface Category{
    key: string;
    name: string;
}

interface Props{
    category: string;
    setCategory: (category: Category) => void;
    closeSelectCategory: () => void;
}
 
export function CategorySelect({category, setCategory, closeSelectCategory}: Props){
    return(
        <Container>
            <Headers>
                <Title>Categoria</Title>
            </Headers>
        </Container>
    )
}