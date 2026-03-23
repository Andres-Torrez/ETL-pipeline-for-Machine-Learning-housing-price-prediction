import pandas as pd


def validate_columns(df: pd.DataFrame, required_columns: list[str]) -> None:
    missing = [col for col in required_columns if col not in df.columns]
    if missing:
        raise ValueError(f"Faltan columnas obligatorias: {missing}")
    print("[VALIDATE] Todas las columnas requeridas están presentes")


def validate_price(df: pd.DataFrame) -> None:
    invalid_prices = df[df["price"].fillna(0) <= 0]
    print(f"[VALIDATE] Registros con precio inválido o faltante: {len(invalid_prices)}")


def validate_duplicates(df: pd.DataFrame) -> None:
    duplicates = df.duplicated().sum()
    print(f"[VALIDATE] Filas duplicadas detectadas: {duplicates}")


def validate_missing_values(df: pd.DataFrame) -> None:
    missing = df.isnull().sum()
    print("[VALIDATE] Valores faltantes por columna:")
    print(missing[missing > 0] if (missing > 0).any() else "No hay valores faltantes")