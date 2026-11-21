
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