import "./scss/style.scss";

const notifications = document.querySelectorAll('.notification');
const notificationsCount = document.getElementById('count') as HTMLParagraphElement;
const markAll = document.getElementById('mark-all') as HTMLParagraphElement;

let unseenNotifications: any[] = [];

let count: number = 3;
let currentCountIndex: number = count;

notificationsCount.innerText = count.toString();

notifications.forEach(notification => {
    
    markAll.addEventListener('click', () => {
        if(notification.classList.contains('unseen')){
            notification.classList.remove('unseen');

            const redDot = notification.querySelector('.red_dot') as HTMLSpanElement;
            redDot.style.display = 'none';

            currentCountIndex = 0;
            count = 0;

            notificationsCount.innerText = currentCountIndex.toString();
        }
    })    

    if(notification.classList.contains('unseen')) {
        unseenNotifications.push(notification);
    }

    notification.addEventListener('click', () => {

        if(notification.classList.contains('unseen')){
            notification.classList.remove('unseen');
            
            const redDot = notification.querySelector('.red_dot') as HTMLSpanElement;
            redDot.style.display = 'none';
        }
        
        currentCountIndex--;
        if(currentCountIndex < 0)
            currentCountIndex = 0;

        notificationsCount.innerText = currentCountIndex.toString();

        unseenNotifications.forEach((_not, index) => {
            index -= currentCountIndex;
            count = index;
        })

    });
});