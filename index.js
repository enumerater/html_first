const headerWapper2 = document.querySelector('.r2');
const back = document.querySelector('.back');
console.log(back);
window.addEventListener('scroll', () => {
    if (back.getBoundingClientRect().top <= 0) {
        headerWapper2.style.display = 'flex';
    } else {
        headerWapper2.style.display = 'none';
    }
});



const elevtor = document.querySelector('.elevtor');
const elevtorShow = document.querySelector('.elevtor-show');
const elevtorBack = document.querySelector('.elevtor-back');
const elevtorHot = document.querySelector('.elevtor-hot');
const elevtorBand = document.querySelector('.elevtor-band');
const elevtorShengxian = document.querySelector('.elevtor-shengxian');
const elevtorFushi = document.querySelector('.elevtor-fushi');
const elevtorCanchu = document.querySelector('.elevtor-canchu');
const elevtorNews = document.querySelector('.elevtor-news');

const goods = document.querySelector('.goods');
const hot = document.querySelector('.hot');
const band = document.querySelector('.band');
const mains = document.querySelectorAll('.main');
const news = document.querySelector('.news');

// 获取固定头部的高度（如果有的话，用于偏移计算）
const headerHeight = document.querySelector('header') ? document.querySelector('header').offsetHeight : 0;

// 电梯导航项和目标区域的映射
const elevatorMap = [
    { button: elevtorShow, target: goods, name: 'show' },
    { button: elevtorHot, target: hot, name: 'hot' },
    { button: elevtorBand, target: band, name: 'band' },
    { button: elevtorShengxian, target: mains[0], name: 'shengxian' },
    { button: elevtorFushi, target: mains[1], name: 'fushi' },
    { button: elevtorCanchu, target: mains[2], name: 'canchu' },
    { button: elevtorNews, target: news, name: 'news' }
];

// 添加点击事件
elevatorMap.forEach(item => {
    item.button.addEventListener('click', () => {
        scrollToSection(item.target);
    });
});

// 平滑滚动到指定区域
function scrollToSection(targetElement) {
    const targetPosition = targetElement.offsetTop - headerHeight - 20; // 减去头部高度和额外偏移
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// 滚动事件处理
window.addEventListener('scroll', () => {
    // 控制电梯导航显示/隐藏
    if (goods.getBoundingClientRect().top <= 400) {
        elevtor.style.opacity = '1';
    } else {
        elevtor.style.opacity = '0';
    }

    // 重置所有背景色
    elevatorMap.forEach(item => {
        item.button.style.backgroundColor = '';
    });

    // 根据滚动位置设置高亮
    let activeSection = null;
    
    // 检查每个区域是否进入视口
    elevatorMap.forEach(item => {
        const rect = item.target.getBoundingClientRect();
        if (rect.top <= 400 && rect.bottom >= 100) {
            activeSection = item;
        }
    });
    
    // 如果没有区域在视口中，找到第一个顶部在视口上方的区域
    if (!activeSection) {
        for (let i = elevatorMap.length - 1; i >= 0; i--) {
            if (elevatorMap[i].target.getBoundingClientRect().top <= 0) {
                activeSection = elevatorMap[i];
                break;
            }
        }
    }
    
    // 设置高亮
    if (activeSection) {
        activeSection.button.style.backgroundColor = 'rgba(182, 181, 181, 0.3)';
    }
});

// 返回顶部功能
if (elevtorBack) {
    elevtorBack.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}