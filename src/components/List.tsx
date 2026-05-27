export const List = ({ title, list, css, line }: { title: string; list: { i: string }[]; css: string; line:boolean }) => {
  return (
    <>
      <div>
        <p className="text-2xl font-SkipStd">{title}</p>
        {line ? (<p className="border my-2"/>) : (<></>)}
        <div className="flex flex-wrap gap-3 m-1">
          {list.map((i) => (
            <p className={css}>{i.i}</p>
          ))}
        </div>
      </div>
    </>
  );
};
