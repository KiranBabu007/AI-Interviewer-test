import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const MockInterview = pgTable('mock_interview', {
id:serial('id').primaryKey(),
jsonMockResp:text('jsonMockResp').notNull(),
jobPosition:varchar('jobPosition').notNull(),
jobExperience:varchar('jobExperience').notNull(),
jobDesc:varchar('jobDesc').notNull(),
createdAt:timestamp('createdAt'),
createdBy:varchar('createdBy').notNull(),
mockId:varchar('mockId').notNull(),
})