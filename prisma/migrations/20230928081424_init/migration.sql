-- CreateTable
CREATE TABLE "Analysis" (
    "id" SERIAL NOT NULL,
    "text" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    "emotion" TEXT[],

    CONSTRAINT "Analysis_pkey" PRIMARY KEY ("id")
);
