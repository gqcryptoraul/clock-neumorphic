import { ScrollView} from "react-native";
import AlarmContainer from "./src/components/Alarm/AlarmContainer";
import Clock from "./src/components/Clock/Clock";
 
export default function Reloj() {

    
return (
  <>
 
    <Clock />
     <ScrollView nestedScrollEnabled={true} contentContainerStyle={{flex: 1, justifyContent: 'flex-end', marginBottom: 50}}>
        <AlarmContainer alarm={"07: 30"}/>   
        <AlarmContainer alarm={"09: 40"}/>   
        <AlarmContainer alarm={"22: 00"}/>  
    </ScrollView>
 
</>
);
}

