const Loading = () => {
  return (
    <div className="fixed top-50% left-0 w-full h-full flex justify-center items-center bg-gray-200 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 border-t-2 border-blue-500 rounded-full animate-spin mr-2"></div>
          <span className="text-lg font-semibold">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
