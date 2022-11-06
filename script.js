const NotifBtn = document.querySelector(".notify");

const reqPermission = function (){
    if(!("Notification" in window))
        throw new Error("Browser doesn't support notification!");
    Notification.requestPermission().then((permission) => {
        const notification = new Notification("ayang<3", {
            body: "Hari ini jangan bobo malem-malem pokoknya!",
            icon: "/ayang.PNG",
        });
    });
}

NotifBtn.addEventListener("click", reqPermission);