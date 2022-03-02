function Greeting (props) {
  const {userInfo} = props;

 return (
   <h1>Hello {userInfo.firstName} {userInfo.lastName}!!!</h1>
 )
}

export default Greeting;