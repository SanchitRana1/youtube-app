import React from "react";
import Comment from "./Comment";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Rana",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusantium reprehenderit architecto error est consequatur, sunt doloremque. Molestiae, sit.",
      replies: [],
    },
    {
      name: "Rana",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusantium reprehenderit architecto error est consequatur, sunt doloremque. Molestiae, sit.",
      replies: [
        {
          name: "Rana",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusantium reprehenderit architecto error est consequatur, sunt doloremque. Molestiae, sit.",
          replies: [],
        },
      ],
    },
    {
      name: "Rana",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusantium reprehenderit architecto error est consequatur, sunt doloremque. Molestiae, sit.",
      replies: [
        {
          name: "Rana",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusantium reprehenderit architecto error est consequatur, sunt doloremque. Molestiae, sit.",
          replies: [],
        },
        {
          name: "Rana",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusantium reprehenderit architecto error est consequatur, sunt doloremque. Molestiae, sit.",
          replies: [
            {
              name: "Rana",
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusantium reprehenderit architecto error est consequatur, sunt doloremque. Molestiae, sit.",
              replies: [],
            },
            {
              name: "Rana",
              text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusantium reprehenderit architecto error est consequatur, sunt doloremque. Molestiae, sit.",
              replies: [
                {
                  name: "Rana",
                  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusantium reprehenderit architecto error est consequatur, sunt doloremque. Molestiae, sit.",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className="p-5 m-5  w-[70%]">
      <h1 className="text-2xl font-bold"> Comments</h1>
      {/* <Comment data={commentsData[0]}/> */}
      <CommentList comments={commentsData} />
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div className="" key={index}>
      <Comment data={comment} />
      <div className="ml-5 pl-2 border border-l-gray-400">
        <CommentList comments={comment?.replies} />
      </div>
    </div>
  ));
};

export default CommentsContainer;
