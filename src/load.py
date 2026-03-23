import os
import pandas as pd


def load_data(df: pd.DataFrame, output_path: str) -> None:
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    df.to_csv(output_path, index=False)
    print(f"[LOAD] Datos guardados en: {output_path}")