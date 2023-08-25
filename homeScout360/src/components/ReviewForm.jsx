import React, { useState } from "react";
import {
  Rating,
  Typography,
  Button,
  TextField,
  Box,
  Container,
} from "@mui/material";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingChange = (newValue) => {
    setRating(newValue);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    // Here you can handle the submission of the review
    // For example, you can send the rating and comment to a server
    console.log("Rating:", rating);
    console.log("Comment:", comment);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Leave a Review
      </Typography>
      <Box display="flex" alignItems="center">
        <Typography variant="body1">Rating:</Typography>
        <Rating
          name="rating"
          value={rating}
          onChange={(event, newValue) => handleRatingChange(newValue)}
        />
      </Box>
      <TextField
        label="Comment"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        value={comment}
        onChange={handleCommentChange}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit Review
      </Button>
    </Container>
  );
};

export default ReviewForm;

// import React, { useState } from 'react';

// const ReviewForm = () => {
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState('');

//   const handleRatingChange = (newValue) => {
//     setRating(newValue);
//   };

//   const handleCommentChange = (event) => {
//     setComment(event.target.value);
//   };

//   const handleSubmit = () => {
//     // Here you can handle the submission of the review
//     // For example, you can send the rating and comment to a server
//     console.log('Rating:', rating);
//     console.log('Comment:', comment);
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
//       <h2 className="text-2xl mb-4">Leave a Review</h2>
//       <div className="flex items-center mb-4">
//         <p className="mr-2">Rating:</p>
//         <div className="space-x-1">
//           {[1, 2, 3, 4, 5].map((value) => (
//             <button
//               key={value}
//               className={`text-yellow-400 ${
//                 value <= rating ? 'text-yellow-500' : ''
//               }`}
//               onClick={() => handleRatingChange(value)}
//             >
//               ⭐
//             </button>
//           ))}
//         </div>
//       </div>
//       <textarea
//         className="w-full px-3 py-2 mb-4 border rounded"
//         rows="4"
//         placeholder="Write your review here..."
//         value={comment}
//         onChange={handleCommentChange}
//       ></textarea>
//       <button
//         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         onClick={handleSubmit}
//       >
//         Submit Review
//       </button>
//     </div>
//   );
// };

// export default ReviewForm;
