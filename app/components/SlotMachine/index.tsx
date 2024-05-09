import "./styles.css";

interface SlotMachineProps {
  objectEmoji: string;
  subjectEmoji: string;
  spinning: boolean;
  win: boolean;
  stopped: boolean;
}

export const SlotMachine = ({
  objectEmoji,
  subjectEmoji,
  spinning,
  win,
  stopped,
}: SlotMachineProps) => {
  const slot = [0, 1, 2];
  const slots = [0, 1, 2, 3, 4];
  let emojis = [
    [subjectEmoji, objectEmoji],
    [subjectEmoji, objectEmoji],
    [subjectEmoji, objectEmoji],
  ];
  if (!win) {
    emojis = [
      [subjectEmoji, objectEmoji],
      [subjectEmoji, objectEmoji],
      [objectEmoji, subjectEmoji],
    ];
  }

  let state = spinning ? "Spinning" : "";
  state = (stopped && "Stopped") || state;

  return (
    <div className="flex relative w-52 h-52 bg-blue-300">
      <div className="machine">
        <div className="slots">
          {slot.map((index) => (
            <ul key={index} className={`slot${state}`}>
              {slots.map(() => {
                return emojis[index].map((e, i) => (
                  <li key={i} className="number">
                    {e}
                  </li>
                ));
              })}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};
