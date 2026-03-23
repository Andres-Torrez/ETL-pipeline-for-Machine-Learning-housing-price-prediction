import pandas as pd


def transform_data(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()

    print("[TRANSFORM] Iniciando transformación...")

    # Eliminar duplicados ignorando el id
    before = len(df)
    df = df.drop_duplicates(
        subset=[
            "city",
            "size_m2",
            "rooms",
            "bathrooms",
            "year_built",
            "distance_center_km",
            "has_elevator",
            "price",
        ]
    )
    after = len(df)
    print(f"[TRANSFORM] Duplicados eliminados: {before - after}")

    # Eliminar filas sin precio o con precio inválido
    before = len(df)
    df = df.dropna(subset=["price"])
    df = df[df["price"] > 0]
    after = len(df)
    print(f"[TRANSFORM] Filas eliminadas por precio inválido/faltante: {before - after}")

    # Rellenar nulos numéricos con la mediana
    numeric_cols = ["size_m2", "distance_center_km", "rooms", "bathrooms", "year_built"]
    for col in numeric_cols:
        df[col] = df[col].fillna(df[col].median())

    # Limpiar texto
    df["city"] = df["city"].str.strip().str.title()
    df["has_elevator"] = df["has_elevator"].str.strip().str.lower()

    # Convertir yes/no a 1/0
    df["has_elevator"] = df["has_elevator"].map({"yes": 1, "no": 0})

    # Crear nuevas variables
    df["property_age"] = 2026 - df["year_built"]
    df["price_per_m2"] = df["price"] / df["size_m2"]

    # One-hot encoding para city
    df = pd.get_dummies(df, columns=["city"], drop_first=True)

    print(f"[TRANSFORM] Dataset final: {df.shape[0]} filas, {df.shape[1]} columnas")
    print("[TRANSFORM] Primeras filas transformadas:")
    print(df.head())

    return df