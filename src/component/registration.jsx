export default function Registration() {
    return (
        <div>
        <form action="onSubmit">
            <label></label>
            <input type="text" name="Firstname" id="name" placeholder="Enter your First name"/>
            <input type="text" name="Lastname" id="lastname" placeholder="Enter your last name"/>
            <input type="email" name="email" id="email" placeholder="Enter your email"/>
            <input type="phone" name="phone" id="phone" placeholder="Enter your phone number"/>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}