<?php

namespace App\Http\Resources;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RollCallResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user'=> new UserResource($this->user),
            'status'=> $this->status,
            'created_at'=> (new Carbon($this->created_at))->format('Y-m-d'),
            'due_date'=> (new Carbon($this->due_date))->format('Y-m-d'),
        ];
    }
}
