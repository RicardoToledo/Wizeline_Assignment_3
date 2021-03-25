# Assignment 3
#### Author: Ricardo Toledo

## Run with:
```
npm run test-tasks
npm run test-projects
npm run test-all
```
## Scenarios:
- Complete flow for 1 task
- Get all active tasks
- Create a new task
- Create and delete 1 task
- Create and update 1 task
- Create, close and reopen 1 task

## Notes

I left the most used and possible phases, the testing was very limited due rate limitations.

**Rate Limiting by Todoist:**
>For each user, you can make a maximum of 450 requests within a 15 minute period.
https://developer.todoist.com/rest/v1/#request-limits

Here are more possible phases that could be added:
```
    # Endurance
    - duration: 500
      arrivalRate: 1
      maxVusers: 5
      name: "Endurance Phase"
    # Spike
    - duration: 60
      arrivalRate: 5
      name: "Warm up"
    - duration: 120
      arrivalRate: 5
      rampTo: 50
      name: "Ramp up load"
    - duration: 60
      arrivalRate: 1
      maxVusers: 1
      name: "Decreased load"
```