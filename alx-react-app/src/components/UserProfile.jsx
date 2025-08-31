const UserProfile = (props) => {
    return (
    <div style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        maxWidth: "300px",
        margin: "1rem auto",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>{props.bio}</p>
    </div>
    );
};

export default UserProfile;