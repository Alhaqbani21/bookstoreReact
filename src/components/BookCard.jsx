import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

function BookCard(props) {
  const navigate = useNavigate();

  function goToBookDetails() {
    navigate(`./${props.id}`);
  }

  return (
    <Card className="w-96 bg-gray-700 rounded p-8">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={props.img}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between flex-col">
          <p color="blue-gray" className="text-gray-300 font-bold text-xl">
            {props.title && `Title: ${props.title}`}
          </p>
          <p color="blue-gray" className="font-medium">
            Price: <span className="text-green-700">${props.price}</span>
          </p>
        </div>
        <p variant="small" color="gray" className="font-normal opacity-75">
          {props.summary}
        </p>
      </CardBody>

      <CardFooter className="flex justify-center items-center my-2">
        <button
          onClick={goToBookDetails}
          className="btn btn-active btn-primary"
        >
          View details
        </button>
      </CardFooter>
    </Card>
  );
}

export default BookCard;
