<?php

namespace App\Http\Controllers;

use App\Http\Resources\NotificationResource;
use App\Models\Notification;
use App\Models\progress;
use App\Http\Requests\StoreprogressRequest;
use App\Http\Requests\UpdateprogressRequest;

class ProgressController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $notofication = Notification::query();
        $userId = auth()->user()->id;

        
        $notofications = $notofication->where('user_id', $userId)->get();
        
        return inertia('Member/MutabaahQuran/Index', [
            "notifications" => NotificationResource::collection($notofications),
        ]);
    }
    

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreprogressRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(progress $progress)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(progress $progress)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateprogressRequest $request, progress $progress)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(progress $progress)
    {
        //
    }
}
