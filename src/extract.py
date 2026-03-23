import pandas as pd


def extract_data(path: str) -> pd.DataFrame:
    """Read raw data from CSV."""
    df = pd.read_csv(path)

    print("\n[EXTRACT] Datos cargados correctamente")
    print(f"[EXTRACT] Filas: {df.shape[0]}, Columnas: {df.shape[1]}")
    print("\n[EXTRACT] Primeras filas:")
    print(df.head())

    return df