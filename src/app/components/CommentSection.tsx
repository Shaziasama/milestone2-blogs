"use client";
import React,{useState} from "react";

import {Card,CardContent} from "../components/ui/card";
import{Input} from "../components/ui/input";
import {Button} from "../components/ui/button";

interface Comment{
  id: string;
  author: string;
  text: string;
}
interface CommentSectionProps {
  postId: string;

}
export default function CommentSection({ postId}: CommentSectionProps){
  const [comments,setComments] = useState<Comment[]>([]);
  const [newComment,setNewComment] = useState("");
  const [authorName,setAutherName] = useState("");
  const [editngCommentId,setEditngCommentId] = useState<string | null> (null);

  const handleAddComment = () => {
    if (newComment.trim( )&& authorName.trim()){
      const newCommentObj : Comment = {
        id:new Date().toISOString(),
        author: authorName,
        text: newComment,

      };
      setComments([...comments,newCommentObj]);
      setNewComment("");
      setAutherName("");

    }
  };
  const handleEditComment =(commentID:string) =>{
    const commentToEdit = comments.find((comment) =>comment.id === commentID);
    if(commentToEdit){
      setNewComment(commentToEdit.text);
      setAutherName(commentToEdit.author)
      setEditngCommentId(commentID);
    }
  };

const handleSaveEditComment =() => {
  if(newComment.trim() && authorName.trim() && editngCommentId){
    const updatedComments = comments.map((comments) =>

      
    comments.id === editngCommentId 
    ?{...comments, text: newComment, author: authorName}
    : comments
);
setComments(updatedComments);
setNewComment("");
setAutherName("");
setEditngCommentId("")
  
}
};
return (
  <div className="mt-8">
<h2 className="text-2xl font-semibold">Comments

</h2>
<div className=" mt-4 space-y-4">
  {comments.length> 0 ?(
    comments.map((comment) =>(
      <Card key={comment.id}>
        <CardContent className="p-4">
        <div className="font-semibold">(comment.author)</div>
        <p>{comment.text}</p>
        <Button 
        onClick={()=>handleEditComment(comment.id)}
        className="mt-2 text-blue-500">Edit</Button>
        </CardContent>
      </Card>
))
):(
  <p className="text-slate-400">No comment yet</p>

)}
  </div>




  <div className="mt-6">
    <input 
    type="text" 
    value={authorName}
    onChange={(e) => setAutherName(e.target.value)}
    placeholder="Your Name"
    className="w-full mb-2"/>

<input 
    type="text" 
    value={newComment}
    onChange={(e) => setNewComment(e.target.value)}
    placeholder="Add a Comment"
    className="w-full mb-2"/>
    <Button onClick={editngCommentId? handleSaveEditComment : handleAddComment}
    className="mt-4">
      {editngCommentId ?"save" :"submit"}
      
    </Button>




</div>

  </div>
)
}