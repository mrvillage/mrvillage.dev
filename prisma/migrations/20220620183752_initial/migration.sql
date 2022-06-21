-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coords_coords" (
    "id" SERIAL NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "z" INTEGER,
    "public" BOOLEAN NOT NULL,
    "list_id" INTEGER NOT NULL,

    CONSTRAINT "coords_coords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coords_coord_lists" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "public" BOOLEAN NOT NULL DEFAULT false,
    "list_id" INTEGER,

    CONSTRAINT "coords_coord_lists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coords_shares" (
    "id" SERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "list_id" INTEGER NOT NULL,

    CONSTRAINT "coords_shares_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_name_key" ON "users"("name");

-- CreateIndex
CREATE UNIQUE INDEX "coords_coords_list_id_key" ON "coords_coords"("list_id");

-- AddForeignKey
ALTER TABLE "coords_coords" ADD CONSTRAINT "coords_coords_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "coords_coord_lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coords_coord_lists" ADD CONSTRAINT "coords_coord_lists_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "coords_coord_lists"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "coords_shares" ADD CONSTRAINT "coords_shares_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "coords_coord_lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
