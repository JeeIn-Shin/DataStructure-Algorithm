const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const LANGUAGE = require('../model/language');
const PRIORITYQUEUE = require('../priorityQueue');


// http://localhost:8080/choice?
// http://localhost:8080/choice?language=java&activity=codeReview
ROUTER.get('/choice', async (req, res) => {

    let inputData = req.query;
    //이 부분

    await LANGUAGE.getByMatchingInformation(inputData, (err, data) => {
        
        try {  
            let firstInputValue = Object.values(inputData)[0]; //java
            let secondInputvalue = Object.values(inputData)[1]; //codeReview

            let reviewerQueue = {
                studentId : [],
                priority : []
            }

            let result;
            let minHeap = new PRIORITYQUEUE();

            //language, activity column의 값을 합쳐서 새로운 객체를 만들어야함
            //이때, id는 그대로.

            // ----id--- | ---priority---
            // 여기서 priority에 따라 우선순위큐를 통해 가장 어울리는 사람을 한명 뽑아내서 매칭해야함
            // 어엉..말은 쉬운데

            //이 data에 어떻게 접근하지?
            //input의 value가 data의 key가 된다. 15, 39 line 참고


            for(let i = 0; i < data.length; i++)   {
                reviewerQueue.studentId[i] = data[i].user_id;
                reviewerQueue.priority[i] = data[i][firstInputValue] + data[i][secondInputvalue];

                //이렇게하면 값이 들어가지 않을까?
                minHeap.enpueue(reviewerQueue.studentId[i], reviewerQueue.priority[i]);
            }
            result = minHeap.depueue();

            //근데 바로 내가 매칭이 되지 않았을 경우
            //기다려야함.
            //대기열에 reviewee, reviewer 둘 중에 한명이라도 추가될 경우
            //매칭 알고리즘을 굴러가야하는데..

            //그렇다면 reviewee 대기열을 만들어야함..
            //만들어서 어떻게????

            //고민
            res.json(result);
        }
        catch (err) {
            console.error(err);
        }
    })
})

module.exports = ROUTER;