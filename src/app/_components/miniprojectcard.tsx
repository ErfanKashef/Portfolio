const Miniprojectcard = () => {
  return (
    <div className="border border-gray-primary gap-4 h-auto w-80 overflow-hidden">
      <div className="border-b border-gray-primary p-2">
        <p className="text-base font-normal text-gray-primary break-words w-full">
          nextjs-tailwindcss-typescript
        </p>
      </div>
      <div className="p-4 flex flex-col gap-4">
        <p className="text-2xl font-medium">admin-panel</p>
        <p className="text-base font-normal text-gray-primary">
          Admin panel for the website
        </p>
        <button
          className="border border-primary text-white px-4 py-2 rounded-md"
          type="button"
        >
          Github
        </button>
      </div>
    </div>
  );
};

export default Miniprojectcard;
