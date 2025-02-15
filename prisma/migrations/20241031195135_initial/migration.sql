BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[WeighIn] (
    [id] INT NOT NULL IDENTITY(1,1),
    [date] DATE NOT NULL,
    [weight] FLOAT(53) NOT NULL,
    CONSTRAINT [WeighIn_pkey] PRIMARY KEY CLUSTERED ([id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
