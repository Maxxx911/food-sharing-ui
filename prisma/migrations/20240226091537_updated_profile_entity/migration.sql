/*
  Warnings:

  - Made the column `name` on table `Profile` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "adress" TEXT,
    "name" TEXT NOT NULL,
    "rate" DECIMAL NOT NULL DEFAULT 5.0,
    "availableTimeStart" DATETIME,
    "availableTimeEnd" DATETIME,
    "contactNumber" TEXT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Profile" ("adress", "availableTimeEnd", "availableTimeStart", "contactNumber", "id", "name", "rate", "userId") SELECT "adress", "availableTimeEnd", "availableTimeStart", "contactNumber", "id", "name", "rate", "userId" FROM "Profile";
DROP TABLE "Profile";
ALTER TABLE "new_Profile" RENAME TO "Profile";
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
