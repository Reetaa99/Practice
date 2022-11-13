# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

The ticket can be broke into 3 main individual tickets:
1. In Frontend part, add UI and function for the Facilities to edit/add custom ID for each agent
    Acceptance Criteria: 
        The client Facility should be able to edit each agent's customID by uploading certain-format file (ex. excel file with each agent's name and ID). 
        The client Facility should be able to edit all customID manually. 
        We should provide some default ways for the client Facility to edit agent's customID
    Time/Effort estimates:
        around 2 weeks
    Implementation Details:
        add UI & functions for uploading an certain-format file, checking the matching name for extracting the ID for each agent, and saving these data into database
        Use input to provide client Facilities a way to edit manually
        consider some default ways of setting customID, add UI and functions for client Facility to be able to just choose ways for customID


2. In database, the new attribute of 'customID' needs to be added
    Acceptance Criteria: 
        finish add customID attributes
        determine the format of possible customID (ex. can be number, string, cannot be boolean, etc..)
    Time/Effort estimates:
        around 2 days
        

3. When use getShiftsByFacility function to get the certain shifts, if customID exists, then we need to get customID instead of databaseID for the reports
    Acceptance Criteria: 
        when we use function getShiftsByFacility, we want to get customID instead of databaseID unless there's no customID set.
    Time/Effort estimates:
        around 2 days
    Implementation Details:
        In the function getShiftsByFacility, we would like to add a conditional statement:
            if customID exists, then extract customID for all agents
            if not, then extract databaseID
