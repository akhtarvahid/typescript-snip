
/** -------------------------------------- Topic wise tasks  ------------------------------------------------ **/
/** -------------------------------------- Topics 47–59  ------------------------------------------------ **/


/**
 * 
 * Practice Question 1 — UserProfile Component
Create a reusable UserProfile component.

Requirements:
1. name — string (required).
2. age — number (required).
3. email — string (optional).
4. isActive — boolean (required).
5. children — optional React content.
*/

// Sample to call

/*
<UserProfile
  name="Vahid"
  age={28}
  email="vahid@example.com"
  isActive={true}
>
  <button>View Profile</button>
</UserProfile>
*/
type IUserProfile = {
  name: string;
  age: number;
  email?: string;
  isActive: boolean;
  children?: React.ReactNode
};
function UserProfile({ name, age, email, isActive, children }: IUserProfile) {
  return (
    <>
      <h1>{name}</h1>
      <div>{email}</div>
      <div>{age}</div>
      <div>{isActive}</div>
      {children}
    </>
  );
}




/**
 * 
 * Advanced Challenge — Props with Union Types
Suppose ek reusable Button component banana hai jo different variants support karta hai.

Requirements:
- variant: "primary" | "secondary" | "danger"
- size: "small" | "medium" | "large"
- disabled: optional boolean
- onClick: optional click handler
- children: React content
*/

type IButton = {
  variant: "primary" | "secondary" | "danger";
  size: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

function Button({
  variant = "primary",
  size = "small",
  disabled,
  onClick,
  children,
}: IButton) {
  const styles = {
    fontSize: {
      small: "12px",
      medium: "16px",
      large: "20px",
    }[size],
    backgroundColor: {
      primary: "blue",
      secondary: "gray",
      danger: "red",
    }[variant],
    color: variant,
    cursor: disabled ? "not-allowed" : "pointer",
  };
  return (
    <button style={styles} onClick={onClick} disabled>
      {children}
    </button>
  );
}


/*
 
Typed Form Events
Create a React component containing:
1. Name input.
2. Email input.
3. Submit button.
4. Input change handlers.
5. Form submit handler.
Requirements:
- Name and email input values console mein print hone chahiye.
- Form submission par page reload prevent hona chahiye.
- Proper React event types use karne hain.

*/

function Form() {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="name" onChange={changeHandler} />
      <input type="text" name="email" onChange={changeHandler} />
      <button type="submit">Submit</button>
    </form>
  );
}


/*
 
Advanced Challenge — Form Events
Question 2
Ab ek controlled form implement karo using React + TypeScript.

Requirements:
1. name aur email ke liye state maintain karo.
2. useState ko correctly type karo.
3. Input changes par respective state update karo.
4. Submit par name aur email console mein print karo.
5. Empty name ya email submit nahi hona chahiye.

// Expected

type FormData = {
  name: string;
  email: string;
};
*/
type FormData = {
  name: string;
  email: string;
};
function ReusableForm() {
  const [state, setState] = useState<FormData>({
    name: "",
    email: "",
  });
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.name || !state.email) return;
    console.log(state);
  };
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="name" onChange={changeHandler} />
      <input type="text" name="email" onChange={changeHandler} />
      <button type="submit">Submit</button>
    </form>
  );
}


/*
 
 User Management
Create a small user management component using useState.

Requirements:
1. Maintain an array of users.
2. Initially array empty hona chahiye.
3. Add a new user.
4. Remove a user using ID.
5. Update a user's name using ID.


// User data sample
type User = {
  id: number;
  name: string;
  email: string;
};

*/

type FormData = {
  id: number;
  name: string;
  email: string;
};
function UserManagement() {
  const [state, setState] = useState<FormData[]>([]);

  const addUser = (obj: FormData) => {
    setState((prev) => [...prev, obj]);
  };
  const removeUser = (id: number) => {
    setState((prev) => prev.filter((p) => p.id !== id));
  };
  const updateUser = (id: number, name: string) => {
    setState((prev) =>
      prev.map((p) => (p.id === id ? { ...p, name: name } : p)),
    );
  };

  console.log(state)

  return (
    <>
      <button
        onClick={() =>
          addUser({
            id: 1,
            name: "Vahid",
            email: "vahid@example.com",
          })
        }
      >
        Add
      </button>
      <button onClick={() => removeUser(1)}>Remove last</button>
      <button onClick={() => updateUser(1, "Vahid Akhtar")}>Update</button>
    </>
  );
}

