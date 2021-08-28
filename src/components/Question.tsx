import '../styles/question.scss'
import {ReactNode} from 'react';

type QuestionProps={
    children?:ReactNode;
    isAnswered?:boolean;
    isHighlighted?:boolean;
    content:string;
    
    author:{
        name:string;
        avatar:string;
    };


}

export function Question({content,author,children,isAnswered=false,isHighlighted=false}: QuestionProps){

        return (

            <div className={`question ${isAnswered ? 'answered' : ''} ${isHighlighted ? 'highlighted' : ''}`}>

                <p>{content}</p>

                <footer>
                    <div className="user-info">

                        <img src={author.avatar} alt={author.name}  />
                        <span>{author.name}</span>
                    </div>

                    <div> {children}</div>

                </footer>
            </div>
           
           
        )
}