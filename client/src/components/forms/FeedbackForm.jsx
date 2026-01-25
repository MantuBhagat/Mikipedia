import React from "react";

const FeedbackForm = () => {
  return (
    <div>
      <h2>feedback for improve</h2>

      <form action="" method="post">
        <input type="text" name="title" />
        <input type="text" name="description" />

        <button className="py-2 px-4 bg-slate-800 text-white">Send</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
