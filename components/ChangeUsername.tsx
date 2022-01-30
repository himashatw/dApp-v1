import { useMoralis } from 'react-moralis';

function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const setUsername = () => {
    const username = prompt(
      `Enter your new username (current: ${user?.get('username')})`
    );

    if (!username) return;

    setUserData({ username });
  };

  return (
    <div className="absolute top-5 right-5 text-sm">
      <button
        disabled={isUserUpdating}
        className="hover:text-pink-700"
        onClick={setUsername}
      >
        Change username
      </button>
    </div>
  );
}

export default ChangeUsername;
