from src.extract import extract_data
from src.config import RAW_DATA_PATH, PROCESSED_DATA_PATH, REQUIRED_COLUMNS
from src.validate import (
    validate_columns,
    validate_price,
    validate_duplicates,
    validate_missing_values,
)
from src.transform import transform_data
from src.load import load_data


if __name__ == "__main__":
    df = extract_data(RAW_DATA_PATH)

    validate_columns(df, REQUIRED_COLUMNS)
    validate_price(df)
    validate_duplicates(df)
    validate_missing_values(df)

    df_clean = transform_data(df)
    load_data(df_clean, PROCESSED_DATA_PATH)