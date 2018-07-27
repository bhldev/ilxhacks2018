export const mockResponse = {
  "type": "DEV",
  "data": {
    "expand": "schema,names",
    "startAt": 0,
    "maxResults": 50,
    "total": 3,
    "issues": [
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
        "id": "21103",
        "self": "https://intelex.atlassian.net/rest/api/2/issue/21103",
        "key": "ILX-10202",
        "fields": {
          "issuetype": {
            "self": "https://intelex.atlassian.net/rest/api/2/issuetype/10001",
            "id": "10001",
            "description": "A user story. Created by JIRA Software - do not edit or delete.",
            "iconUrl": "https://intelex.atlassian.net/images/icons/issuetypes/story.svg",
            "name": "Story",
            "subtask": false
          },
          "timespent": null,
          "customfield_10074": null,
          "project": {
            "self": "https://intelex.atlassian.net/rest/api/2/project/10003",
            "id": "10003",
            "key": "ILX",
            "name": "Intelex Delivery",
            "projectTypeKey": "software",
            "avatarUrls": {
              "48x48": "https://intelex.atlassian.net/secure/projectavatar?pid=10003&avatarId=10487",
              "24x24": "https://intelex.atlassian.net/secure/projectavatar?size=small&pid=10003&avatarId=10487",
              "16x16": "https://intelex.atlassian.net/secure/projectavatar?size=xsmall&pid=10003&avatarId=10487",
              "32x32": "https://intelex.atlassian.net/secure/projectavatar?size=medium&pid=10003&avatarId=10487"
            }
          },
          "customfield_10075": null,
          "customfield_10076": null,
          "customfield_10077": {
            "self": "https://intelex.atlassian.net/rest/api/2/customFieldOption/10052",
            "value": "No",
            "id": "10052"
          },
          "fixVersions": [],
          "customfield_10078": null,
          "aggregatetimespent": null,
          "customfield_10079": null,
          "resolution": null,
          "resolutiondate": null,
          "workratio": -1,
          "watches": {
            "self": "https://intelex.atlassian.net/rest/api/2/issue/ILX-10202/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "lastViewed": "2018-07-27T16:18:49.943+0000",
          "customfield_10061": {
            "self": "https://intelex.atlassian.net/rest/api/2/customFieldOption/10027",
            "value": "Cloud",
            "id": "10027"
          },
          "created": "2018-07-24T10:12:46.292+0000",
          "customfield_10063": null,
          "customfield_10065": {
            "self": "https://intelex.atlassian.net/rest/api/2/customFieldOption/10019",
            "value": "No",
            "id": "10019"
          },
          "customfield_10066": "https://intelex.aha.io/requirements/PLATT-858-15",
          "customfield_10067": null,
          "customfield_10100": null,
          "priority": {
            "self": "https://intelex.atlassian.net/rest/api/2/priority/4",
            "iconUrl": "https://intelex.atlassian.net/images/icons/priorities/low.svg",
            "name": "Normal",
            "id": "4"
          },
          "customfield_10101": null,
          "customfield_10102": null,
          "labels": [],
          "aggregatetimeoriginalestimate": null,
          "timeestimate": null,
          "versions": [],
          "issuelinks": [
            {
              "id": "19223",
              "self": "https://intelex.atlassian.net/rest/api/2/issueLink/19223",
              "type": {
                "id": "10202",
                "name": "Treatment",
                "inward": "is treated by",
                "outward": "treats",
                "self": "https://intelex.atlassian.net/rest/api/2/issueLinkType/10202"
              },
              "inwardIssue": {
                "id": "21114",
                "key": "ILX-10213",
                "self": "https://intelex.atlassian.net/rest/api/2/issue/21114",
                "fields": {
                  "summary": "Performance issues exporting All Tasks",
                  "status": {
                    "self": "https://intelex.atlassian.net/rest/api/2/status/10003",
                    "description": "",
                    "iconUrl": "https://intelex.atlassian.net/images/icons/statuses/generic.png",
                    "name": "New",
                    "id": "10003",
                    "statusCategory": {
                      "self": "https://intelex.atlassian.net/rest/api/2/statuscategory/2",
                      "id": 2,
                      "key": "new",
                      "colorName": "blue-gray",
                      "name": "To Do"
                    }
                  },
                  "priority": {
                    "self": "https://intelex.atlassian.net/rest/api/2/priority/4",
                    "iconUrl": "https://intelex.atlassian.net/images/icons/priorities/low.svg",
                    "name": "Normal",
                    "id": "4"
                  },
                  "issuetype": {
                    "self": "https://intelex.atlassian.net/rest/api/2/issuetype/10023",
                    "id": "10023",
                    "description": "A possible future event that would affect the project outcomes.",
                    "iconUrl": "https://intelex.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10300&avatarType=issuetype",
                    "name": "Risk",
                    "subtask": false,
                    "avatarId": 10300
                  }
                }
              }
            }
          ],
          "assignee": {
            "self": "https://intelex.atlassian.net/rest/api/2/user?username=brinda.sasikumar",
            "name": "brinda.sasikumar",
            "key": "brinda.sasikumar",
            "accountId": "557058:c3f24934-28ec-4b56-b9f3-3a2626a43ce0",
            "emailAddress": "brinda.sasikumar@intelex.com",
            "avatarUrls": {
              "48x48": "https://avatar-cdn.atlassian.com/1a7f85e1f504ed2614c790e95032899f?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F1a7f85e1f504ed2614c790e95032899f%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue",
              "24x24": "https://avatar-cdn.atlassian.com/1a7f85e1f504ed2614c790e95032899f?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F1a7f85e1f504ed2614c790e95032899f%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue",
              "16x16": "https://avatar-cdn.atlassian.com/1a7f85e1f504ed2614c790e95032899f?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F1a7f85e1f504ed2614c790e95032899f%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue",
              "32x32": "https://avatar-cdn.atlassian.com/1a7f85e1f504ed2614c790e95032899f?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F1a7f85e1f504ed2614c790e95032899f%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue"
            },
            "displayName": "Brinda Sasikumar",
            "active": true,
            "timeZone": "Etc/GMT"
          },
          "updated": "2018-07-24T15:52:37.212+0000",
          "status": {
            "self": "https://intelex.atlassian.net/rest/api/2/status/3",
            "description": "This issue is being actively worked on at the moment by the assignee.",
            "iconUrl": "https://intelex.atlassian.net/images/icons/statuses/inprogress.png",
            "name": "In Development",
            "id": "3",
            "statusCategory": {
              "self": "https://intelex.atlassian.net/rest/api/2/statuscategory/4",
              "id": 4,
              "key": "indeterminate",
              "colorName": "yellow",
              "name": "In Progress"
            }
          },
          "components": [],
          "customfield_10091": null,
          "customfield_10092": null,
          "customfield_10093": null,
          "customfield_10094": null,
          "timeoriginalestimate": null,
          "customfield_10095": null,
          "description": "*Navigation:*\n\n*New My Tasks UI*\n\n*Problem Statement:*\n\nAs an Intelex user, I need the capability to export All Tasks in to an Excel file. Similar to the functionality available in the V6 My Tasks page.\n\n*Requirements:*\n\n* Export in to Excel\n* Should contain all records (not just what is in the view)\n* Add a gear icon (for now) to the left of the filter icon (will be moved eventually)\n* Create a common re-usable component for the export.\n\n*Acceptance Criteria:*\n\n* Correctly exports all tasks (not just what is in view)\n* The fie name is \"All Tasks \\{date_time\\}.xls \\- See current export format name\n* Gear icon to the left of the filter icon\n* Tooltip is “Export to Excel”\n\n\n\nDev Notes\n\n* Note that each view has different columns.\n",
          "customfield_10098": null,
          "customfield_10010": [
            "com.atlassian.greenhopper.service.sprint.Sprint@537c01e3[id=338,rapidViewId=17,state=ACTIVE,name=Cloud - Sprint 59,goal=No more vacation!!!!,startDate=2018-07-24T14:37:01.366Z,endDate=2018-07-30T14:37:00.000Z,completeDate=<null>,sequence=338]"
          ],
          "customfield_10011": "2|i00o1y:",
          "customfield_10099": null,
          "customfield_10012": null,
          "customfield_10013": null,
          "customfield_10059": null,
          "customfield_10049": 5,
          "security": {
            "self": "https://intelex.atlassian.net/rest/api/2/securitylevel/10000",
            "id": "10000",
            "description": "Access granted to Intelex only",
            "name": "ILX Access"
          },
          "customfield_10008": "ILX-10145",
          "aggregatetimeestimate": null,
          "customfield_10009": null,
          "summary": "Ability to export All Tasks",
          "creator": {
            "self": "https://intelex.atlassian.net/rest/api/2/user?username=addon_io.aha.connect",
            "name": "addon_io.aha.connect",
            "key": "addon_io.aha.connect",
            "accountId": "557058:e121c477-243a-4647-93e1-7391e04386f3",
            "emailAddress": "io.aha.connect@connect.atlassian.com",
            "avatarUrls": {
              "48x48": "https://avatar-cdn.atlassian.com/6e77961fb56a7b66ab70a73e8a799d78?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F6e77961fb56a7b66ab70a73e8a799d78%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue",
              "24x24": "https://avatar-cdn.atlassian.com/6e77961fb56a7b66ab70a73e8a799d78?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F6e77961fb56a7b66ab70a73e8a799d78%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue",
              "16x16": "https://avatar-cdn.atlassian.com/6e77961fb56a7b66ab70a73e8a799d78?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F6e77961fb56a7b66ab70a73e8a799d78%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue",
              "32x32": "https://avatar-cdn.atlassian.com/6e77961fb56a7b66ab70a73e8a799d78?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F6e77961fb56a7b66ab70a73e8a799d78%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue"
            },
            "displayName": "Aha! Visual Product Roadmaps",
            "active": true,
            "timeZone": "Etc/GMT"
          },
          "customfield_10080": null,
          "subtasks": [
            {
              "id": "21162",
              "key": "ILX-10261",
              "self": "https://intelex.atlassian.net/rest/api/2/issue/21162",
              "fields": {
                "summary": "Create Test cases",
                "status": {
                  "self": "https://intelex.atlassian.net/rest/api/2/status/10001",
                  "description": "",
                  "iconUrl": "https://intelex.atlassian.net/",
                  "name": "Done",
                  "id": "10001",
                  "statusCategory": {
                    "self": "https://intelex.atlassian.net/rest/api/2/statuscategory/3",
                    "id": 3,
                    "key": "done",
                    "colorName": "green",
                    "name": "Done"
                  }
                },
                "priority": {
                  "self": "https://intelex.atlassian.net/rest/api/2/priority/4",
                  "iconUrl": "https://intelex.atlassian.net/images/icons/priorities/low.svg",
                  "name": "Normal",
                  "id": "4"
                },
                "issuetype": {
                  "self": "https://intelex.atlassian.net/rest/api/2/issuetype/10003",
                  "id": "10003",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://intelex.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10316&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10316
                }
              }
            },
            {
              "id": "21163",
              "key": "ILX-10262",
              "self": "https://intelex.atlassian.net/rest/api/2/issue/21163",
              "fields": {
                "summary": "Review Test cases",
                "status": {
                  "self": "https://intelex.atlassian.net/rest/api/2/status/10003",
                  "description": "",
                  "iconUrl": "https://intelex.atlassian.net/images/icons/statuses/generic.png",
                  "name": "New",
                  "id": "10003",
                  "statusCategory": {
                    "self": "https://intelex.atlassian.net/rest/api/2/statuscategory/2",
                    "id": 2,
                    "key": "new",
                    "colorName": "blue-gray",
                    "name": "To Do"
                  }
                },
                "priority": {
                  "self": "https://intelex.atlassian.net/rest/api/2/priority/4",
                  "iconUrl": "https://intelex.atlassian.net/images/icons/priorities/low.svg",
                  "name": "Normal",
                  "id": "4"
                },
                "issuetype": {
                  "self": "https://intelex.atlassian.net/rest/api/2/issuetype/10003",
                  "id": "10003",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://intelex.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10316&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10316
                }
              }
            },
            {
              "id": "21164",
              "key": "ILX-10263",
              "self": "https://intelex.atlassian.net/rest/api/2/issue/21164",
              "fields": {
                "summary": "Perform Testing",
                "status": {
                  "self": "https://intelex.atlassian.net/rest/api/2/status/10003",
                  "description": "",
                  "iconUrl": "https://intelex.atlassian.net/images/icons/statuses/generic.png",
                  "name": "New",
                  "id": "10003",
                  "statusCategory": {
                    "self": "https://intelex.atlassian.net/rest/api/2/statuscategory/2",
                    "id": 2,
                    "key": "new",
                    "colorName": "blue-gray",
                    "name": "To Do"
                  }
                },
                "priority": {
                  "self": "https://intelex.atlassian.net/rest/api/2/priority/4",
                  "iconUrl": "https://intelex.atlassian.net/images/icons/priorities/low.svg",
                  "name": "Normal",
                  "id": "4"
                },
                "issuetype": {
                  "self": "https://intelex.atlassian.net/rest/api/2/issuetype/10003",
                  "id": "10003",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://intelex.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10316&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10316
                }
              }
            }
          ],
          "reporter": {
            "self": "https://intelex.atlassian.net/rest/api/2/user?username=vijayesh.nair",
            "name": "vijayesh.nair",
            "key": "vijayesh.nair",
            "accountId": "5aafcbaa795d0d2a5cd942b1",
            "emailAddress": "vijayesh.nair@intelex.com",
            "avatarUrls": {
              "48x48": "https://avatar-cdn.atlassian.com/bb67e6b9175a19e402026de1497c7125?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fbb67e6b9175a19e402026de1497c7125%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue",
              "24x24": "https://avatar-cdn.atlassian.com/bb67e6b9175a19e402026de1497c7125?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fbb67e6b9175a19e402026de1497c7125%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue",
              "16x16": "https://avatar-cdn.atlassian.com/bb67e6b9175a19e402026de1497c7125?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fbb67e6b9175a19e402026de1497c7125%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue",
              "32x32": "https://avatar-cdn.atlassian.com/bb67e6b9175a19e402026de1497c7125?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fbb67e6b9175a19e402026de1497c7125%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue"
            },
            "displayName": "VJ Nair",
            "active": true,
            "timeZone": "America/Toronto"
          },
          "customfield_10087": null,
          "customfield_10088": null,
          "customfield_10000": "{}",
          "aggregateprogress": {
            "progress": 0,
            "total": 0
          },
          "customfield_10001": null,
          "customfield_10089": null,
          "customfield_10004": null,
          "environment": null,
          "duedate": null,
          "progress": {
            "progress": 0,
            "total": 0
          },
          "votes": {
            "self": "https://intelex.atlassian.net/rest/api/2/issue/ILX-10202/votes",
            "votes": 0,
            "hasVoted": false
          }
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
        "id": "20647",
        "self": "https://intelex.atlassian.net/rest/api/2/issue/20647",
        "key": "ILX-9795",
        "fields": {
          "issuetype": {
            "self": "https://intelex.atlassian.net/rest/api/2/issuetype/10001",
            "id": "10001",
            "description": "A user story. Created by JIRA Software - do not edit or delete.",
            "iconUrl": "https://intelex.atlassian.net/images/icons/issuetypes/story.svg",
            "name": "Story",
            "subtask": false
          },
          "timespent": null,
          "customfield_10074": null,
          "project": {
            "self": "https://intelex.atlassian.net/rest/api/2/project/10003",
            "id": "10003",
            "key": "ILX",
            "name": "Intelex Delivery",
            "projectTypeKey": "software",
            "avatarUrls": {
              "48x48": "https://intelex.atlassian.net/secure/projectavatar?pid=10003&avatarId=10487",
              "24x24": "https://intelex.atlassian.net/secure/projectavatar?size=small&pid=10003&avatarId=10487",
              "16x16": "https://intelex.atlassian.net/secure/projectavatar?size=xsmall&pid=10003&avatarId=10487",
              "32x32": "https://intelex.atlassian.net/secure/projectavatar?size=medium&pid=10003&avatarId=10487"
            }
          },
          "customfield_10075": null,
          "customfield_10076": null,
          "fixVersions": [],
          "customfield_10077": {
            "self": "https://intelex.atlassian.net/rest/api/2/customFieldOption/10052",
            "value": "No",
            "id": "10052"
          },
          "customfield_10078": null,
          "aggregatetimespent": null,
          "customfield_10079": null,
          "resolution": null,
          "resolutiondate": null,
          "workratio": -1,
          "watches": {
            "self": "https://intelex.atlassian.net/rest/api/2/issue/ILX-9795/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "lastViewed": "2018-07-27T18:31:27.751+0000",
          "created": "2018-07-10T07:52:32.520+0000",
          "customfield_10061": {
            "self": "https://intelex.atlassian.net/rest/api/2/customFieldOption/10027",
            "value": "Cloud",
            "id": "10027"
          },
          "customfield_10063": null,
          "customfield_10065": {
            "self": "https://intelex.atlassian.net/rest/api/2/customFieldOption/10019",
            "value": "No",
            "id": "10019"
          },
          "customfield_10066": "https://intelex.aha.io/requirements/PLATT-822-2",
          "priority": {
            "self": "https://intelex.atlassian.net/rest/api/2/priority/4",
            "iconUrl": "https://intelex.atlassian.net/images/icons/priorities/low.svg",
            "name": "Normal",
            "id": "4"
          },
          "customfield_10100": null,
          "customfield_10067": null,
          "customfield_10101": null,
          "customfield_10102": null,
          "labels": [],
          "aggregatetimeoriginalestimate": null,
          "timeestimate": null,
          "versions": [],
          "issuelinks": [
            {
              "id": "19006",
              "self": "https://intelex.atlassian.net/rest/api/2/issueLink/19006",
              "type": {
                "id": "10001",
                "name": "Cloners",
                "inward": "is cloned by",
                "outward": "clones",
                "self": "https://intelex.atlassian.net/rest/api/2/issueLinkType/10001"
              },
              "inwardIssue": {
                "id": "20914",
                "key": "ILX-10039",
                "self": "https://intelex.atlassian.net/rest/api/2/issue/20914",
                "fields": {
                  "summary": "Create the same pagination and Total Items on new My Tasks UI as the bulletins inventory page",
                  "status": {
                    "self": "https://intelex.atlassian.net/rest/api/2/status/10016",
                    "description": "",
                    "iconUrl": "https://intelex.atlassian.net/images/icons/statuses/generic.png",
                    "name": "Will not implement",
                    "id": "10016",
                    "statusCategory": {
                      "self": "https://intelex.atlassian.net/rest/api/2/statuscategory/3",
                      "id": 3,
                      "key": "done",
                      "colorName": "green",
                      "name": "Done"
                    }
                  },
                  "priority": {
                    "self": "https://intelex.atlassian.net/rest/api/2/priority/4",
                    "iconUrl": "https://intelex.atlassian.net/images/icons/priorities/low.svg",
                    "name": "Normal",
                    "id": "4"
                  },
                  "issuetype": {
                    "self": "https://intelex.atlassian.net/rest/api/2/issuetype/10001",
                    "id": "10001",
                    "description": "A user story. Created by JIRA Software - do not edit or delete.",
                    "iconUrl": "https://intelex.atlassian.net/images/icons/issuetypes/story.svg",
                    "name": "Story",
                    "subtask": false
                  }
                }
              }
            }
          ],
          "assignee": {
            "self": "https://intelex.atlassian.net/rest/api/2/user?username=brian.lim",
            "name": "brian.lim",
            "key": "brian.lim",
            "accountId": "5a2abf3ba3481b031fe7210c",
            "emailAddress": "brian.lim@intelex.com",
            "avatarUrls": {
              "48x48": "https://avatar-cdn.atlassian.com/cf10bf33587f64a3762039d0d6f30882?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fcf10bf33587f64a3762039d0d6f30882%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue",
              "24x24": "https://avatar-cdn.atlassian.com/cf10bf33587f64a3762039d0d6f30882?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fcf10bf33587f64a3762039d0d6f30882%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue",
              "16x16": "https://avatar-cdn.atlassian.com/cf10bf33587f64a3762039d0d6f30882?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fcf10bf33587f64a3762039d0d6f30882%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue",
              "32x32": "https://avatar-cdn.atlassian.com/cf10bf33587f64a3762039d0d6f30882?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fcf10bf33587f64a3762039d0d6f30882%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue"
            },
            "displayName": "Brian Lim",
            "active": true,
            "timeZone": "Etc/GMT"
          },
          "updated": "2018-07-24T13:40:46.671+0000",
          "status": {
            "self": "https://intelex.atlassian.net/rest/api/2/status/3",
            "description": "This issue is being actively worked on at the moment by the assignee.",
            "iconUrl": "https://intelex.atlassian.net/images/icons/statuses/inprogress.png",
            "name": "In Development",
            "id": "3",
            "statusCategory": {
              "self": "https://intelex.atlassian.net/rest/api/2/statuscategory/4",
              "id": 4,
              "key": "indeterminate",
              "colorName": "yellow",
              "name": "In Progress"
            }
          },
          "components": [],
          "customfield_10091": null,
          "customfield_10092": null,
          "customfield_10093": null,
          "customfield_10094": null,
          "customfield_10095": null,
          "timeoriginalestimate": null,
          "description": "*Navigation:*\n\nNew My Tasks UI (hidden)\n\n*Problem Statement:*\n\nTo ensure consistency between the new Alliance themes, create a footer at the bottom that is similar to the bulletins page.\n\n*Requirements:*\n\n* Show the page you are on and how many are remaining (ex: Page 1/377)\n* Create a common pagination component.\n\n*Acceptance Criteria:*\n\n* It should look similar / layout as that of the bulletins footer\n* Display the current page you are on\n* Display the total number of pages available\n* Ability to move from one page to another\n\n*Out of Scope:*\n\nNew My Tasks UI \\- do not touch it.\n\n*Existing Feature:*\n\nNo\n\n*Outstanding Question:*\n\nN/A",
          "customfield_10098": null,
          "customfield_10010": [
            "com.atlassian.greenhopper.service.sprint.Sprint@537c01e3[id=338,rapidViewId=17,state=ACTIVE,name=Cloud - Sprint 59,goal=No more vacation!!!!,startDate=2018-07-24T14:37:01.366Z,endDate=2018-07-30T14:37:00.000Z,completeDate=<null>,sequence=338]",
            "com.atlassian.greenhopper.service.sprint.Sprint@5133bf9f[id=318,rapidViewId=17,state=CLOSED,name=Cloud - Sprint 57,goal=Zero to hero!,startDate=2018-07-10T14:48:04.647Z,endDate=2018-07-16T14:48:00.000Z,completeDate=2018-07-17T13:54:21.927Z,sequence=318]",
            "com.atlassian.greenhopper.service.sprint.Sprint@6bca0f69[id=335,rapidViewId=17,state=CLOSED,name=Cloud - Sprint 58,goal=Welcome back!!,startDate=2018-07-17T14:49:29.094Z,endDate=2018-07-23T14:49:00.000Z,completeDate=2018-07-24T13:40:45.586Z,sequence=335]"
          ],
          "customfield_10011": "2|i00j8e:wn",
          "customfield_10099": null,
          "customfield_10012": null,
          "customfield_10013": null,
          "customfield_10059": null,
          "customfield_10049": 3,
          "security": {
            "self": "https://intelex.atlassian.net/rest/api/2/securitylevel/10000",
            "id": "10000",
            "description": "Access granted to Intelex only",
            "name": "ILX Access"
          },
          "customfield_10008": "ILX-9770",
          "customfield_10009": null,
          "aggregatetimeestimate": null,
          "summary": "Create the same pagination user experience on new My Tasks UI as the bulletins inventory page",
          "creator": {
            "self": "https://intelex.atlassian.net/rest/api/2/user?username=addon_io.aha.connect",
            "name": "addon_io.aha.connect",
            "key": "addon_io.aha.connect",
            "accountId": "557058:e121c477-243a-4647-93e1-7391e04386f3",
            "emailAddress": "io.aha.connect@connect.atlassian.com",
            "avatarUrls": {
              "48x48": "https://avatar-cdn.atlassian.com/6e77961fb56a7b66ab70a73e8a799d78?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F6e77961fb56a7b66ab70a73e8a799d78%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue",
              "24x24": "https://avatar-cdn.atlassian.com/6e77961fb56a7b66ab70a73e8a799d78?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F6e77961fb56a7b66ab70a73e8a799d78%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue",
              "16x16": "https://avatar-cdn.atlassian.com/6e77961fb56a7b66ab70a73e8a799d78?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F6e77961fb56a7b66ab70a73e8a799d78%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue",
              "32x32": "https://avatar-cdn.atlassian.com/6e77961fb56a7b66ab70a73e8a799d78?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2F6e77961fb56a7b66ab70a73e8a799d78%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue"
            },
            "displayName": "Aha! Visual Product Roadmaps",
            "active": true,
            "timeZone": "Etc/GMT"
          },
          "customfield_10080": null,
          "subtasks": [
            {
              "id": "20697",
              "key": "ILX-9845",
              "self": "https://intelex.atlassian.net/rest/api/2/issue/20697",
              "fields": {
                "summary": "Create Test cases",
                "status": {
                  "self": "https://intelex.atlassian.net/rest/api/2/status/10001",
                  "description": "",
                  "iconUrl": "https://intelex.atlassian.net/",
                  "name": "Done",
                  "id": "10001",
                  "statusCategory": {
                    "self": "https://intelex.atlassian.net/rest/api/2/statuscategory/3",
                    "id": 3,
                    "key": "done",
                    "colorName": "green",
                    "name": "Done"
                  }
                },
                "priority": {
                  "self": "https://intelex.atlassian.net/rest/api/2/priority/4",
                  "iconUrl": "https://intelex.atlassian.net/images/icons/priorities/low.svg",
                  "name": "Normal",
                  "id": "4"
                },
                "issuetype": {
                  "self": "https://intelex.atlassian.net/rest/api/2/issuetype/10003",
                  "id": "10003",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://intelex.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10316&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10316
                }
              }
            },
            {
              "id": "20698",
              "key": "ILX-9846",
              "self": "https://intelex.atlassian.net/rest/api/2/issue/20698",
              "fields": {
                "summary": "Review Test cases",
                "status": {
                  "self": "https://intelex.atlassian.net/rest/api/2/status/10001",
                  "description": "",
                  "iconUrl": "https://intelex.atlassian.net/",
                  "name": "Done",
                  "id": "10001",
                  "statusCategory": {
                    "self": "https://intelex.atlassian.net/rest/api/2/statuscategory/3",
                    "id": 3,
                    "key": "done",
                    "colorName": "green",
                    "name": "Done"
                  }
                },
                "priority": {
                  "self": "https://intelex.atlassian.net/rest/api/2/priority/4",
                  "iconUrl": "https://intelex.atlassian.net/images/icons/priorities/low.svg",
                  "name": "Normal",
                  "id": "4"
                },
                "issuetype": {
                  "self": "https://intelex.atlassian.net/rest/api/2/issuetype/10003",
                  "id": "10003",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://intelex.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10316&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10316
                }
              }
            },
            {
              "id": "20699",
              "key": "ILX-9847",
              "self": "https://intelex.atlassian.net/rest/api/2/issue/20699",
              "fields": {
                "summary": "Perform Testing",
                "status": {
                  "self": "https://intelex.atlassian.net/rest/api/2/status/10003",
                  "description": "",
                  "iconUrl": "https://intelex.atlassian.net/images/icons/statuses/generic.png",
                  "name": "New",
                  "id": "10003",
                  "statusCategory": {
                    "self": "https://intelex.atlassian.net/rest/api/2/statuscategory/2",
                    "id": 2,
                    "key": "new",
                    "colorName": "blue-gray",
                    "name": "To Do"
                  }
                },
                "priority": {
                  "self": "https://intelex.atlassian.net/rest/api/2/priority/4",
                  "iconUrl": "https://intelex.atlassian.net/images/icons/priorities/low.svg",
                  "name": "Normal",
                  "id": "4"
                },
                "issuetype": {
                  "self": "https://intelex.atlassian.net/rest/api/2/issuetype/10003",
                  "id": "10003",
                  "description": "The sub-task of the issue",
                  "iconUrl": "https://intelex.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10316&avatarType=issuetype",
                  "name": "Sub-task",
                  "subtask": true,
                  "avatarId": 10316
                }
              }
            }
          ],
          "reporter": {
            "self": "https://intelex.atlassian.net/rest/api/2/user?username=vijayesh.nair",
            "name": "vijayesh.nair",
            "key": "vijayesh.nair",
            "accountId": "5aafcbaa795d0d2a5cd942b1",
            "emailAddress": "vijayesh.nair@intelex.com",
            "avatarUrls": {
              "48x48": "https://avatar-cdn.atlassian.com/bb67e6b9175a19e402026de1497c7125?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fbb67e6b9175a19e402026de1497c7125%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue",
              "24x24": "https://avatar-cdn.atlassian.com/bb67e6b9175a19e402026de1497c7125?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fbb67e6b9175a19e402026de1497c7125%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue",
              "16x16": "https://avatar-cdn.atlassian.com/bb67e6b9175a19e402026de1497c7125?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fbb67e6b9175a19e402026de1497c7125%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue",
              "32x32": "https://avatar-cdn.atlassian.com/bb67e6b9175a19e402026de1497c7125?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fbb67e6b9175a19e402026de1497c7125%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue"
            },
            "displayName": "VJ Nair",
            "active": true,
            "timeZone": "America/Toronto"
          },
          "customfield_10087": null,
          "customfield_10000": "{pullrequest={dataType=pullrequest, state=OPEN, stateCount=1}, json={\"cachedValue\":{\"errors\":[],\"summary\":{\"pullrequest\":{\"overall\":{\"count\":1,\"lastUpdated\":\"2018-07-26T17:38:17.000+0000\",\"stateCount\":1,\"state\":\"OPEN\",\"dataType\":\"pullrequest\",\"open\":true},\"byInstanceType\":{\"github\":{\"count\":1,\"name\":\"GitHub\"}}}}},\"isStale\":true}}",
          "aggregateprogress": {
            "progress": 0,
            "total": 0
          },
          "customfield_10088": null,
          "customfield_10089": null,
          "customfield_10001": null,
          "customfield_10004": null,
          "environment": null,
          "duedate": null,
          "progress": {
            "progress": 0,
            "total": 0
          },
          "votes": {
            "self": "https://intelex.atlassian.net/rest/api/2/issue/ILX-9795/votes",
            "votes": 0,
            "hasVoted": false
          }
        }
      },
      {
        "expand": "operations,versionedRepresentations,editmeta,changelog,renderedFields",
        "id": "20184",
        "self": "https://intelex.atlassian.net/rest/api/2/issue/20184",
        "key": "ILX-9432",
        "fields": {
          "issuetype": {
            "self": "https://intelex.atlassian.net/rest/api/2/issuetype/10005",
            "id": "10005",
            "description": "A problem identified in a Production system.",
            "iconUrl": "https://intelex.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10304&avatarType=issuetype",
            "name": "Defect",
            "subtask": false,
            "avatarId": 10304
          },
          "timespent": null,
          "customfield_10073": {
            "self": "https://intelex.atlassian.net/rest/api/2/customFieldOption/10081",
            "value": "Severity 3 (Medium: has a workaround)",
            "id": "10081"
          },
          "customfield_10074": null,
          "customfield_10075": null,
          "project": {
            "self": "https://intelex.atlassian.net/rest/api/2/project/10003",
            "id": "10003",
            "key": "ILX",
            "name": "Intelex Delivery",
            "projectTypeKey": "software",
            "avatarUrls": {
              "48x48": "https://intelex.atlassian.net/secure/projectavatar?pid=10003&avatarId=10487",
              "24x24": "https://intelex.atlassian.net/secure/projectavatar?size=small&pid=10003&avatarId=10487",
              "16x16": "https://intelex.atlassian.net/secure/projectavatar?size=xsmall&pid=10003&avatarId=10487",
              "32x32": "https://intelex.atlassian.net/secure/projectavatar?size=medium&pid=10003&avatarId=10487"
            }
          },
          "customfield_10076": null,
          "fixVersions": [],
          "customfield_10077": {
            "self": "https://intelex.atlassian.net/rest/api/2/customFieldOption/10052",
            "value": "No",
            "id": "10052"
          },
          "aggregatetimespent": null,
          "customfield_10078": null,
          "resolution": null,
          "customfield_10079": null,
          "resolutiondate": null,
          "workratio": -1,
          "lastViewed": "2018-07-27T18:46:18.836+0000",
          "watches": {
            "self": "https://intelex.atlassian.net/rest/api/2/issue/ILX-9432/watchers",
            "watchCount": 1,
            "isWatching": false
          },
          "customfield_10061": {
            "self": "https://intelex.atlassian.net/rest/api/2/customFieldOption/10027",
            "value": "Cloud",
            "id": "10027"
          },
          "created": "2018-06-21T20:25:37.375+0000",
          "customfield_10063": null,
          "customfield_10064": null,
          "customfield_10065": {
            "self": "https://intelex.atlassian.net/rest/api/2/customFieldOption/10019",
            "value": "No",
            "id": "10019"
          },
          "customfield_10066": null,
          "customfield_10067": null,
          "customfield_10100": null,
          "priority": {
            "self": "https://intelex.atlassian.net/rest/api/2/priority/4",
            "iconUrl": "https://intelex.atlassian.net/images/icons/priorities/low.svg",
            "name": "Normal",
            "id": "4"
          },
          "customfield_10101": null,
          "customfield_10102": null,
          "labels": [],
          "aggregatetimeoriginalestimate": null,
          "timeestimate": null,
          "versions": [],
          "issuelinks": [],
          "assignee": {
            "self": "https://intelex.atlassian.net/rest/api/2/user?username=christopher.bechard",
            "name": "christopher.bechard",
            "key": "christopher.bechard",
            "accountId": "5a046103ddbd515de42b393d",
            "emailAddress": "christopher.bechard@intelex.com",
            "avatarUrls": {
              "48x48": "https://avatar-cdn.atlassian.com/bf29ffc9b13ed87d68bbc45fa6ee4ae5?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fbf29ffc9b13ed87d68bbc45fa6ee4ae5%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue",
              "24x24": "https://avatar-cdn.atlassian.com/bf29ffc9b13ed87d68bbc45fa6ee4ae5?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fbf29ffc9b13ed87d68bbc45fa6ee4ae5%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue",
              "16x16": "https://avatar-cdn.atlassian.com/bf29ffc9b13ed87d68bbc45fa6ee4ae5?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fbf29ffc9b13ed87d68bbc45fa6ee4ae5%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue",
              "32x32": "https://avatar-cdn.atlassian.com/bf29ffc9b13ed87d68bbc45fa6ee4ae5?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fbf29ffc9b13ed87d68bbc45fa6ee4ae5%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue"
            },
            "displayName": "Chris Bechard",
            "active": true,
            "timeZone": "America/Toronto"
          },
          "updated": "2018-07-26T13:36:44.797+0000",
          "status": {
            "self": "https://intelex.atlassian.net/rest/api/2/status/3",
            "description": "This issue is being actively worked on at the moment by the assignee.",
            "iconUrl": "https://intelex.atlassian.net/images/icons/statuses/inprogress.png",
            "name": "In Development",
            "id": "3",
            "statusCategory": {
              "self": "https://intelex.atlassian.net/rest/api/2/statuscategory/4",
              "id": 4,
              "key": "indeterminate",
              "colorName": "yellow",
              "name": "In Progress"
            }
          },
          "components": [],
          "customfield_10091": null,
          "customfield_10092": null,
          "customfield_10093": null,
          "customfield_10094": null,
          "customfield_10095": null,
          "timeoriginalestimate": null,
          "description": "Summary – \r\nUnnecessary icons getting highlighted\r\n\r\nSite(s) Tested On – \r\nhttps://tor01devweb01.intelex.com/devlogin/devform/Alliance/\r\nhttps://stgclients.intelex.com/PlatformSmokeTestLogin3/dev/Alliance\r\nhttps://stgclients.intelex.com/PlatformSmokeTestLogin/ReleaseCandidate2/Alliance\r\n\r\nSite(s) Defect Found On – \r\nhttps://tor01devweb01.intelex.com/devlogin/devform/Alliance/\r\nhttps://stgclients.intelex.com/PlatformSmokeTestLogin3/dev/Alliance\r\nhttps://stgclients.intelex.com/PlatformSmokeTestLogin/ReleaseCandidate2/Alliance\r\n\r\nPreconditions –\r\n1. Login to the site as an Alliance user\r\n\r\nBrowser(s) Tested On – \r\nChrome, Firefox, IE11\r\n\r\nBrowser(s) Defect Found On – \r\nChrome, Firefox, IE11\r\n\r\nDevice(s) Tested On – \r\nIphone6(10.3.2), Samsung 6(7.0), Samsung Tab(7.0), Ipad air (11.2.1)\r\n\r\nDevice(s) Defect Found On – \r\nIphone6(10.3.2), Samsung 6(7.0), Samsung Tab(7.0), Ipad air (11.2.1)\r\n\r\nSTR –\r\n1. In the left menu Tool bar, click on Home or My tasks to verify the highlight\r\n2, Click on Calendar to verify the Highlight\r\n\r\nExpected Result – \r\nSelected icon should get highlighted\r\n\r\nActual Result – \r\nUnnecessary icons getting highlighted",
          "customfield_10010": [
            "com.atlassian.greenhopper.service.sprint.Sprint@537c01e3[id=338,rapidViewId=17,state=ACTIVE,name=Cloud - Sprint 59,goal=No more vacation!!!!,startDate=2018-07-24T14:37:01.366Z,endDate=2018-07-30T14:37:00.000Z,completeDate=<null>,sequence=338]",
            "com.atlassian.greenhopper.service.sprint.Sprint@28c0d37a[id=311,rapidViewId=17,state=CLOSED,name=Cloud - Sprint 55,goal=Happy Canada Day!,startDate=2018-06-26T15:07:29.242Z,endDate=2018-07-02T15:07:00.000Z,completeDate=2018-07-03T14:11:48.461Z,sequence=311]",
            "com.atlassian.greenhopper.service.sprint.Sprint@1b00ac98[id=317,rapidViewId=17,state=CLOSED,name=Cloud - Sprint 56,goal=Don't be shy to test...,startDate=2018-07-03T14:21:36.753Z,endDate=2018-07-09T14:21:00.000Z,completeDate=2018-07-10T13:55:58.205Z,sequence=317]",
            "com.atlassian.greenhopper.service.sprint.Sprint@5133bf9f[id=318,rapidViewId=17,state=CLOSED,name=Cloud - Sprint 57,goal=Zero to hero!,startDate=2018-07-10T14:48:04.647Z,endDate=2018-07-16T14:48:00.000Z,completeDate=2018-07-17T13:54:21.927Z,sequence=318]",
            "com.atlassian.greenhopper.service.sprint.Sprint@6bca0f69[id=335,rapidViewId=17,state=CLOSED,name=Cloud - Sprint 58,goal=Welcome back!!,startDate=2018-07-17T14:49:29.094Z,endDate=2018-07-23T14:49:00.000Z,completeDate=2018-07-24T13:40:45.586Z,sequence=335]"
          ],
          "customfield_10098": null,
          "customfield_10099": null,
          "customfield_10011": "2|i00kd2:",
          "customfield_10012": "2018-06-25T20:29:45.260+0000",
          "customfield_10013": null,
          "customfield_10059": null,
          "customfield_10049": null,
          "security": {
            "self": "https://intelex.atlassian.net/rest/api/2/securitylevel/10000",
            "id": "10000",
            "description": "Access granted to Intelex only",
            "name": "ILX Access"
          },
          "customfield_10008": null,
          "customfield_10009": null,
          "aggregatetimeestimate": null,
          "summary": "Unnecessary Icons getting Highlighted when clicked on one",
          "creator": {
            "self": "https://intelex.atlassian.net/rest/api/2/user?username=sowmya.dasari",
            "name": "sowmya.dasari",
            "key": "sowmya.dasari",
            "accountId": "5a0b3524b473181bae3dd927",
            "emailAddress": "sowmya.dasari@intelex.com",
            "avatarUrls": {
              "48x48": "https://avatar-cdn.atlassian.com/ecc3438e044cb8f0dde9c446e0fd5cc1?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fecc3438e044cb8f0dde9c446e0fd5cc1%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue",
              "24x24": "https://avatar-cdn.atlassian.com/ecc3438e044cb8f0dde9c446e0fd5cc1?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fecc3438e044cb8f0dde9c446e0fd5cc1%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue",
              "16x16": "https://avatar-cdn.atlassian.com/ecc3438e044cb8f0dde9c446e0fd5cc1?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fecc3438e044cb8f0dde9c446e0fd5cc1%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue",
              "32x32": "https://avatar-cdn.atlassian.com/ecc3438e044cb8f0dde9c446e0fd5cc1?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fecc3438e044cb8f0dde9c446e0fd5cc1%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue"
            },
            "displayName": "Sowmya Dasari",
            "active": true,
            "timeZone": "America/Toronto"
          },
          "customfield_10080": null,
          "subtasks": [],
          "reporter": {
            "self": "https://intelex.atlassian.net/rest/api/2/user?username=sowmya.dasari",
            "name": "sowmya.dasari",
            "key": "sowmya.dasari",
            "accountId": "5a0b3524b473181bae3dd927",
            "emailAddress": "sowmya.dasari@intelex.com",
            "avatarUrls": {
              "48x48": "https://avatar-cdn.atlassian.com/ecc3438e044cb8f0dde9c446e0fd5cc1?s=48&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fecc3438e044cb8f0dde9c446e0fd5cc1%3Fd%3Dmm%26s%3D48%26noRedirect%3Dtrue",
              "24x24": "https://avatar-cdn.atlassian.com/ecc3438e044cb8f0dde9c446e0fd5cc1?s=24&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fecc3438e044cb8f0dde9c446e0fd5cc1%3Fd%3Dmm%26s%3D24%26noRedirect%3Dtrue",
              "16x16": "https://avatar-cdn.atlassian.com/ecc3438e044cb8f0dde9c446e0fd5cc1?s=16&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fecc3438e044cb8f0dde9c446e0fd5cc1%3Fd%3Dmm%26s%3D16%26noRedirect%3Dtrue",
              "32x32": "https://avatar-cdn.atlassian.com/ecc3438e044cb8f0dde9c446e0fd5cc1?s=32&d=https%3A%2F%2Fsecure.gravatar.com%2Favatar%2Fecc3438e044cb8f0dde9c446e0fd5cc1%3Fd%3Dmm%26s%3D32%26noRedirect%3Dtrue"
            },
            "displayName": "Sowmya Dasari",
            "active": true,
            "timeZone": "America/Toronto"
          },
          "customfield_10087": null,
          "aggregateprogress": {
            "progress": 0,
            "total": 0
          },
          "customfield_10088": null,
          "customfield_10000": "{pullrequest={dataType=pullrequest, state=OPEN, stateCount=1}, json={\"cachedValue\":{\"errors\":[],\"summary\":{\"pullrequest\":{\"overall\":{\"count\":1,\"lastUpdated\":\"2018-07-25T14:16:18.000+0000\",\"stateCount\":1,\"state\":\"OPEN\",\"dataType\":\"pullrequest\",\"open\":true},\"byInstanceType\":{\"github\":{\"count\":1,\"name\":\"GitHub\"}}}}},\"isStale\":true}}",
          "customfield_10001": null,
          "customfield_10089": null,
          "customfield_10004": null,
          "environment": null,
          "duedate": null,
          "progress": {
            "progress": 0,
            "total": 0
          },
          "votes": {
            "self": "https://intelex.atlassian.net/rest/api/2/issue/ILX-9432/votes",
            "votes": 0,
            "hasVoted": false
          }
        }
      }
    ]
  }
}