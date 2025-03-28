import { useState } from "react";
import { useParams } from "react-router-dom";
import { activities, projectTasks } from "../Data";

type ColumnProps = {
  title: string;
  column: string;
  cards: Card[];
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
};

type Card = {
  title: string;
  id: string;
  column: string;
};

type CardProps = Card & {
  handleDragStart: (e: React.DragEvent<HTMLDivElement>, card: Card) => void;
  handleDeleteCard: (id: string) => void;
};

type AddCardProps = {
  column: string;
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
};

export const Tasks = () => {
  const { id } = useParams<{ id: string }>();

  if (!id || !activities[id]) {
    return <div>PROJECT NOT FOUND</div>;
  }

  return (
    <div className="h-full">
      <Board projectId={id} />
    </div>
  );
};


export const Board = ({ projectId }: { projectId: string }) => {
  const [cards, setCards] = useState<Card[]>(projectTasks[projectId] || []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 h-full">
      <Column
        title="BACKLOG"
        column="backlog"
        cards={cards}
        setCards={setCards}
      />
      <Column title="TO DO" column="todo" cards={cards} setCards={setCards} />
      <Column
        title="IN PROGRESS"
        column="progress"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="COMPLETED"
        column="completed"
        cards={cards}
        setCards={setCards}
      />
    </div>
  );
};

const Column = ({ title, column, cards, setCards }: ColumnProps) => {
  const [active, setActive] = useState(false);

  const columnTextColors: Record<string, string> = {
    backlog: "text-pink-600",
    todo: "text-orange-500",
    progress: "text-blue-600",
    completed: "text-green-600",
  };

  const textColor = columnTextColors[column];

  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    const cardId = e.dataTransfer.getData("cardId");

    setCards((prevCards) =>
      prevCards.map((card) => (card.id === cardId ? { ...card, column } : card))
    );

    setActive(false);
  };

  const handleDeleteCard = (cardId: string) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, card: Card) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <div
      className={`w-full shrink-0 rounded-[7.5px] p-[10px] ${
        active ? "bg-indigo-900" : ""
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="mb-3 flex items-center justify-between">
        <h3>{title}</h3>
        {/* Apply dynamic text color */}
        <span className={`${textColor}`}>{filteredCards.length}</span>
      </div>
      <div className="h-full w-full">
        {filteredCards.map((c) => (
          <Card
            key={c.id}
            {...c}
            handleDragStart={handleDragStart}
            handleDeleteCard={handleDeleteCard}
          />
        ))}
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  );
};

const Card = ({
  title,
  column,
  id,
  handleDragStart,
  handleDeleteCard,
}: CardProps) => {
  const card = { title, column, id };

  const columnColors: Record<string, string> = {
    backlog: "bg-pink-600",
    todo: "bg-orange-500",
    progress: "bg-blue-600",
    completed: "bg-green-600",
  };

  const backgroundColor = columnColors[column];

  return (
    <>
      <div
        className={`relative cursor-grab rounded-[7.5px] ${backgroundColor} p-[25px] mb-[10px] active:cursor-grabbing`}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, card)} // Use the drag handler
      >
        <p className="break-words">{title}</p>
        <button
          className="absolute top-1 right-1 h-5 w-5 flex items-center justify-center text-[rgb(30,30,30)] hover:text-white"
          onClick={(e) => {
            e.stopPropagation(); // Prevent drag from triggering
            handleDeleteCard(id);
          }}
        >
          x
        </button>
      </div>
    </>
  );
};

const AddCard = ({ column, setCards }: AddCardProps) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.trim().length) return;

    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    };

    setCards((pv) => [...pv, newCard]);
    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <form onSubmit={handleSubmit} className="relative">
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="ENTER TASK DESCRIPTION"
            className="w-full h-[200px] rounded-[7.5px] bg-[rgba(30,30,30,0.5)] p-[25px] focus:outline-0 overflow-hidden"
          />

          <button
            onClick={() => setAdding(false)}
            className="absolute top-1 right-1 h-5 w-5 flex items-center justify-center hover:text-indigo-900"
          >
            x
          </button>
          <button
            type="submit"
            className="absolute top-1 left-1 h-5 w-5 flex items-center justify-center hover:text-indigo-900"
          >
            +
          </button>
        </form>
      ) : (
        <button
          onClick={() => setAdding(true)}
          className="flex w-full items-center px-[12px] hover:text-indigo-900"
        >
          +
        </button>
      )}
    </>
  );
};

export default Tasks;
