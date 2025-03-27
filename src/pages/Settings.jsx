import PostList from "../components/PostList";

const Settings = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p>Profile customization coming soon...</p>

        <PostList />
      </div>
    </div>
  );
};

export default Settings;