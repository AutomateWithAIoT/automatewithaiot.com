import subprocess
import json
import os

# ----------------------
# TAO Toolkit Training
# ----------------------


def train_pet_behavior_model(spec_file, results_dir, kitti_root, pretrained_model):
    """
    Trains a pet behavior detection model using NVIDIA TAO Toolkit.

    Args:
        spec_file (str): Path to the TAO Toolkit training specification file.
        results_dir (str): Directory to store training results.
        kitti_root (str): Root directory of the KITTI-formatted dataset.
        pretrained_model (str): Pretrained model to start from (e.g., "nvidia/pretrained_model:resnet18").
    """

    tao_command = [
        "tao",
        "train",
        "-e",
        spec_file,
        "-r",
        results_dir,
        "-k",
        "_encryption_key",  # Change this!
        "--gpus",
        "4",  # Adjust based on  system
        "--pretrained_model",
        pretrained_model,
    ]

    env = os.environ.copy()
    # env["KEY"] = "some_key"

    try:
        process = subprocess.Popen(
            tao_command, env=env, stdout=subprocess.PIPE, stderr=subprocess.PIPE
        )
        while True:
            output = process.stdout.readline()
            if output:
                print(output.strip().decode())
            if process.poll() is not None:
                break
        if process.returncode != 0:
            print("TAO Toolkit training failed.")
            print(process.stderr.read().decode())
            return False
        else:
            print("TAO Toolkit training completed successfully!")
            return True

    except FileNotFoundError:
        print(
            "Error: 'tao' command not found. Ensure TAO Toolkit is correctly installed and in  PATH."
        )
        return False


# ----------------------
# TAO Toolkit Export
# ----------------------


def export_tao_model(spec_file, model_file, output_file):
    """
    Exports a trained TAO model to an engine format for deployment.

    Args:
        spec_file (str): Path to the TAO Toolkit export specification file.
        model_file (str): Path to the trained TAO model (.tlt file).
        output_file (str): Path to save the exported engine file.
    """

    tao_export_command = [
        "tao",
        "export",
        "-e",
        spec_file,
        "-m",
        model_file,
        "-o",
        output_file,
        "-k",
        "_encryption_key",  # Must match training key!
    ]

    try:
        process = subprocess.Popen(
            tao_export_command, stdout=subprocess.PIPE, stderr=subprocess.PIPE
        )
        while True:
            output = process.stdout.readline()
            if output:
                print(output.strip().decode())
            if process.poll() is not None:
                break
        if process.returncode != 0:
            print("TAO Toolkit export failed.")
            print(process.stderr.read().decode())
            return False
        else:
            print("TAO Toolkit export completed successfully!")
            return True

    except FileNotFoundError:
        print(
            "Error: 'tao' command not found. Ensure TAO Toolkit is correctly installed and in  PATH."
        )
        return False


if __name__ == "__main__":
    # --- Example Usage ---
    train_spec = "path/to/train_spec.txt"  #  training configuration
    training_results = "path/to/training_results"
    dataset_path = "path/to/pet_dataset"
    pretrained = "nvidia/pretrained_model:resnet18"  # Or  chosen model

    if train_pet_behavior_model(train_spec, training_results, dataset_path, pretrained):
        print("Training successful. Now exporting...")

        export_spec = "path/to/export_spec.txt"  #  export configuration
        trained_model = os.path.join(
            training_results, "model.tlt"
        )  # Path to  trained .tlt model
        exported_engine = "path/to/exported/model.engine"

        export_tao_model(export_spec, trained_model, exported_engine)
    else:
        print("Training failed, skipping export.")
