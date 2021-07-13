let displayData = document.getElementById("display");

displayData.addEventListener("click", getData);

function getData() {
        fetch('./person.json')
            .then(res => res.json())
            .then(data => {
                let output = "<h4>Display User</h4>";
                // Givenm JSON file is holding data in Object format, TO itrate trhough forEach it should be in Array Format. 
                // Object.entries has been used to convert object to array
                // Refer this link https://www.samanthaming.com/tidbits/76-converting-object-to-array/
                Object.entries(data.persons).forEach(([key, value]) => {
                   output +=`
                    <ul>
                        <li>${value.name}</li>
                        <li>${value.age}</li>
                        <li>${value.address}</li>
                    </ul>
                    `;
                });
                let x = document.getElementById("result").innerHTML = output;        
                })
        .catch(error => {
                console.log(error);
            });
        
}



