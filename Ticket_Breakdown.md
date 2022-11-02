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


Tickets:
1 - Create a database entry field for the new customId on ‘Agents’ table: I assume agents are already a one-to-many with their facilities (agent-to-facilities).

    Facilities should be able to add a string that includes their own facility id, paired with the custom alias for their agent.

    If facility “111” calls their agent(id of ‘2’) ‘Achilles’, and facility ‘222’ calls them ‘Paris’, the entry for their agent would have these fields associated with its respective id entries:  {Id: 2,  customId: “111:achilles-222:paris”, ...}

2 - Give Facilities a field to store/update their agent's alias field and any necessary 'write' permissions: this will allow for easier lookup of an agent with only facility info.

    When accessing the agent by their alias, the query should be able to access the appropriate agent by partial string match to the ‘facilityId:customId’ pair found within the ‘-‘ separated pairs.
